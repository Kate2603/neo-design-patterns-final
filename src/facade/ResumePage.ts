import { ResumeImporter } from "../importer/ResumeImporter";

export class ResumePage {
  private importer = new ResumeImporter();

  async init(jsonPath: string) {
    try {
      await this.importer.run(jsonPath);
      console.log("Resume rendered from", jsonPath);
    } catch (e) {
      console.error("ResumePage init error:", e);
    }
  }
}
