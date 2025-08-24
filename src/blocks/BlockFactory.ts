import { IBlock } from "./IBlock";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";
import {
  ResumeModel,
  HeaderModel,
  SummaryModel,
  ExperienceItemModel,
  EducationModel,
  SkillsModel,
} from "../models/ResumeModel";

export class BlockFactory {
  createBlock(type: string, model: any): IBlock {
    switch (type) {
      case "header":
        return new HeaderBlock(model as HeaderModel);
      case "summary":
        return new SummaryBlock(model as SummaryModel);
      case "experience":
        return new ExperienceBlock(model as ExperienceItemModel[]);
      case "education":
        return new EducationBlock(model as EducationModel);
      case "skills":
        return new SkillsBlock(model as SkillsModel);
      default:
        throw new Error(`Unknown block type: ${type}`);
    }
  }

  // helper to build all from ResumeModel
  createAll(model: ResumeModel): IBlock[] {
    return [
      this.createBlock("header", model.header),
      this.createBlock("summary", model.summary),
      this.createBlock("experience", model.experience),
      this.createBlock("education", model.education),
      this.createBlock("skills", model.skills),
    ];
  }
}
