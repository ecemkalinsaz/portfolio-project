import { ProjectItem } from "./ProjectItem";
import { useContext } from "react";
import { AppContext } from "../context";

export function Projects() {
  const { language, myData } = useContext(AppContext);
  const projects = myData.projects
  return (
    <div
      className={`flex p-0 text-left font-['Inter'] `}
      
    >
      <div className="px-20 flex items-start w-full py-[84px] bg-[rgba(203,242,129,1)] dark:bg-[rgb(26,33,11)]">
        <div className="flex flex-col items-start p-0 gap-[27px]">
          <p className="text-5xl font-bold leading-none m-0 tracking-[0.01em] text-[rgba(71,49,211,1)] dark:text-[rgb(203,242,129)]">
            {language === 'en' ? 'Projects' : 'Projeler'}
          </p>
          {projects.map((project, index) => (
            // key unique olmali. Cunku react oyle istiyor. Bu keyler ile componentleri ayirt ediyor.
            <ProjectItem key={`item-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}