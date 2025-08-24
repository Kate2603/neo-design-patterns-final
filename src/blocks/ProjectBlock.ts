import { IBlock } from "./IBlock";
import { ProjectModel } from "../models/ResumeModel";

export class ProjectBlock implements IBlock {
  constructor(private model: ProjectModel) {}

  render(): HTMLElement {
    const item = document.createElement("div");
    item.className = "project";

    const name = document.createElement("h4");
    name.textContent = this.model.name;
    item.appendChild(name);

    if (this.model.period) {
      const period = document.createElement("div");
      period.className = "period";
      period.textContent = this.model.period;
      item.appendChild(period);
    }

    if (this.model.description) {
      const desc = document.createElement("p");
      desc.textContent = this.model.description;
      item.appendChild(desc);
    }

    // mark for decorator if needed by setting dataset
    if (this.model.isRecent) {
      item.dataset.isRecent = "true";
    }

    return item;
  }
}
