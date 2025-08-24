export abstract class AbstractImporter<T> {
  // Template method
  async run(path: string): Promise<T | null> {
    const raw = await this.load(path);
    if (!raw) {
      console.error("No data loaded from", path);
      return null;
    }

    const valid = this.validate(raw);
    if (!valid) {
      console.error("Validation failed");
      return null;
    }

    const mapped = this.map(raw);
    await this.render(mapped);
    return mapped;
  }

  protected async load(path: string): Promise<any | null> {
    try {
      const resp = await fetch(path);
      if (!resp.ok) {
        console.error("Failed to fetch", path, resp.status);
        return null;
      }
      const json = await resp.json();
      return json;
    } catch (e) {
      console.error("Load error", e);
      return null;
    }
  }

  protected abstract validate(raw: any): boolean;
  protected abstract map(raw: any): T;
  protected abstract render(model: T): Promise<void>;
}
