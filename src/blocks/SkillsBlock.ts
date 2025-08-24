import { IBlock } from "./IBlock";
import { SkillsModel } from "../models/ResumeModel";

function createList(title: string, arr?: string[]) {
  const container = document.createElement("div");
  if (!arr || !arr.length) return container;
  const h = document.createElement("h4");
  h.textContent = title;
  container.appendChild(h);
  const ul = document.createElement("ul");
  for (const v of arr) {
    const li = document.createElement("li");
    li.textContent = v;
    ul.appendChild(li);
  }
  container.appendChild(ul);
  return container;
}

export class SkillsBlock implements IBlock {
  constructor(private model: SkillsModel) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "block skills-block";

    const h = document.createElement("h2");
    h.textContent = "Skills";
    section.appendChild(h);

    const core = createList("core", this.model.core);
    section.appendChild(core);

    const tools = createList("tools", this.model.tools);
    section.appendChild(tools);

    const langs = createList("languages", this.model.languages);
    section.appendChild(langs);

    return section;
  }
}
