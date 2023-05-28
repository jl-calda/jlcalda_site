import StackIcon from "../_components/StackIcon";
import { projects } from "../_data/projects";

import LinkButtons from "./_components/LinkButtons";
import ImageCarousel from "./_components/ImageCarousel";
import BackHeader from "./_components/BackHeader";
import OtherProjectCard from "./_components/OtherProjectCard";

interface IProjectPageParams {
  projectId: string;
}

const ProjectPage = ({ params }: { params: IProjectPageParams }) => {
  const { projectId } = params;
  const project = projects.find((project) => project.projectId === projectId);
  const otherProjects = projects?.filter(
    (project) => project.projectId !== projectId
  );

  return (
    <div className="max-w-full h-full prose px-4 py-4">
      <BackHeader />
      <div className="flex flex-col sm:flex-row items-start sm:justify-between sm:items-center">
        <h2 className="m-0">{project?.title}</h2>
        <LinkButtons project={project} />
      </div>
      <p>{project?.description}</p>
      <div className="w-full flex-1">
        {project?.images && <ImageCarousel data={project?.images} />}
      </div>
      <h3>Tech Stack</h3>
      <div className="flex flex-row gap-x-2 gap-y-2 flex-wrap">
        {project?.stack.map((stack) => (
          <StackIcon
            key={crypto.randomUUID()}
            stack={stack}
          />
        ))}
      </div>
      <h3>Other Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-4 pt-4 pb-6">
        {otherProjects?.map((project) => (
          <OtherProjectCard
            project={project}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
