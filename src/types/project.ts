export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface DevopsStage {
  branch: string;
  label: string;
  purpose: string;
  details: string[];
}

export interface Project {
  title: string;
  category: string;
  clientBrand: string;
  enterprise: string;
  tags: string[];
  duration: string;
  myRole: string;
  process: string;
  tools: string[];
  languages: string[];
  githubUrl: string;
  screenshotCount: number;
  highlights?: ProjectHighlight[];
  devopsFlow?: DevopsStage[];
  localSetup?: string[];
}