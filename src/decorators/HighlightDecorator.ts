export class HighlightDecorator {
  constructor() {}

  apply(root: HTMLElement) {
    // Find project elements that were marked with dataset.isRecent === "true"
    const projects = root.querySelectorAll<HTMLElement>(
      "[data-is-recent='true'], [data-is-recent='true']"
    );
    projects.forEach((el) => {
      el.classList.add("highlight");
    });
  }
}
