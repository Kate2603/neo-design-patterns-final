export type Contact = {
  email?: string;
  phone?: string;
  location?: string;
};

export type HeaderModel = {
  name: string;
  title?: string;
  contacts?: Contact;
};

export type SummaryModel = {
  text: string;
};

export type ProjectModel = {
  name: string;
  description?: string;
  isRecent?: boolean;
  period?: string;
};

export type ExperienceItemModel = {
  company: string;
  position?: string;
  period?: string;
  projects?: ProjectModel[];
};

export type EducationModel = {
  degree: string;
  institution?: string;
  year?: string;
};

export type SkillsModel = {
  core?: string[];
  tools?: string[];
  languages?: string[];
};

export type ResumeModel = {
  header: HeaderModel;
  summary: SummaryModel;
  experience: ExperienceItemModel[];
  education: EducationModel[];
  skills: SkillsModel;
};
