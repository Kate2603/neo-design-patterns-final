import { IBlock } from "./IBlock";
import { SummaryModel } from "../models/ResumeModel";

export class SummaryBlock implements IBlock {
  constructor(private model: SummaryModel) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "block summary-block";

    const h = document.createElement("h2");
    h.textContent = "Summary";
    section.appendChild(h);

    const p = document.createElement("p");
    p.textContent = this.model.text;
    section.appendChild(p);

    return section;
  }
}
