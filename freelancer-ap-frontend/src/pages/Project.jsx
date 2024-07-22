import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

function Project() {
  //? I write coutom hook for fetch single data so useParams write in use
  //? useProject js file
  // const {id}=useParams();
  // console.log(id);

  const { isLoading, project } =useProject();
  // console.log(project.proposals, "this  is project component with proposals of single project");

  if (isLoading) return <Loading />;
  return (
    <div className="">
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
