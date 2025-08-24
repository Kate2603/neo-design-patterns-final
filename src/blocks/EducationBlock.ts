import { IBlock } from "./IBlock";
import { EducationModel } from "../models/ResumeModel";

export class EducationBlock implements IBlock {
  constructor(private model: EducationModel) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "block education-block";

    const h = document.createElement("h2");
    h.textContent = "Education";
    section.appendChild(h);

    const item = document.createElement("div");
    item.className = "education-item";

    const deg = document.createElement("h3");
    deg.textContent = this.model.degree;
    item.appendChild(deg);

    if (this.model.institution) {
      const inst = document.createElement("div");
      inst.textContent = this.model.institution;
      item.appendChild(inst);
    }

    if (this.model.year) {
      const year = document.createElement("div");
      year.className = "period";
      year.textContent = this.model.year;
      item.appendChild(year);
    }

    section.appendChild(item);

    return section;
  }
}
