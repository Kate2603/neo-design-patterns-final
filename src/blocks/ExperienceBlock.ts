import { IBlock } from "./IBlock";
import { ExperienceItemModel, ProjectModel } from "../models/ResumeModel";
import { ProjectBlock } from "./ProjectBlock";

export class ExperienceBlock implements IBlock {
  constructor(private items: ExperienceItemModel[]) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "block experience-block";

    const h = document.createElement("h2");
    h.textContent = "Experience";
    section.appendChild(h);

    for (const item of this.items) {
      const companyNode = document.createElement("div");
      companyNode.className = "experience-item";

      const header = document.createElement("h3");
      header.textContent = `${item.position ? item.position + " at " : ""}${
        item.company
      }`;
      companyNode.appendChild(header);

      if (item.period) {
        const period = document.createElement("div");
        period.className = "period";
        period.textContent = item.period;
        companyNode.appendChild(period);
      }

      // Projects (composite children)
      if (item.projects && item.projects.length) {
        const projectsContainer = document.createElement("div");
        projectsContainer.className = "projects";

        for (const p of item.projects) {
          const projectBlock = new ProjectBlock(p);
          const projectEl = projectBlock.render();
          projectsContainer.appendChild(projectEl);
        }

        companyNode.appendChild(projectsContainer);
      }

      section.appendChild(companyNode);
    }

    return section;
  }
}
