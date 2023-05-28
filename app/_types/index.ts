export type RouteType = {
  label: string;
  href: string;
  isActive: boolean;
};

// @ /projects
export type ProjectType = {
  projectId: string;
  title: string;
  description: string;
  stack: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};
