import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  private targetId = "resume-content";

  protected validate(raw: any): boolean {
    if (!raw) return false;
    const required = ["header", "summary", "experience", "education", "skills"];
    for (const key of required) {
      if (!(key in raw)) {
        console.error(`Missing required block: ${key}`);
        return false;
      }
    }
    return true;
  }

  protected map(raw: any): ResumeModel {
    // minimal mapping — assumes resume.json follows expected structure
    const model: ResumeModel = {
      header: {
        name: raw.header.name || "",
        title: raw.header.title || "",
        contacts: raw.header.contacts || {},
      },
      summary: {
        text: raw.summary.text || "",
      },
      experience: Array.isArray(raw.experience)
        ? raw.experience.map((e: any) => ({
            company: e.company || "",
            position: e.position || "",
            period: e.period || "",
            projects: Array.isArray(e.projects)
              ? e.projects.map((p: any) => ({
                  name: p.name || "",
                  description: p.description || "",
                  isRecent: !!p.isRecent,
                  period: p.period || "",
                }))
              : [],
          }))
        : [],
      education: Array.isArray(raw.education)
        ? raw.education.map((ed: any) => ({
            degree: ed.degree || "",
            institution: ed.institution || "",
            year: ed.year || "",
          }))
        : [],
      skills: {
        core: raw.skills.core || [],
        tools: raw.skills.tools || [],
        languages: raw.skills.languages || [],
      },
    };
    return model;
  }

  protected async render(model: ResumeModel): Promise<void> {
    const root = document.getElementById(this.targetId);
    if (!root) {
      throw new Error(`#${this.targetId} not found in DOM`);
    }
    // Clear existing
    root.innerHTML = "";

    const factory = new BlockFactory();
    const blocks = factory.createAll(model);

    // Append each block
    for (const block of blocks) {
      const el = block.render();
      root.appendChild(el);
    }

    // Apply decorator to highlight recent projects
    const decorator = new HighlightDecorator();
    decorator.apply(root);
  }
}
