import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  // I can use useProject hook or projects as props use
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        لیست درخواست‌های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
