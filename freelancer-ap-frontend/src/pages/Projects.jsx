import ProjectsTable from "../features/projects/ProjectTable";
import ProjectsHeader from "../features/projects/ProjectsHeader";

function projects() {
    return ( 
        <div className="">
            <ProjectsHeader/>
            <ProjectsTable/>
        </div>
     );
}

export default projects;