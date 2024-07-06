import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
// import ProjectRow from "./ProjectRow";

import ProjectRowTable from "./ProjectRowTable";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="rounded-xl overflow-hidden">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسنه‌بندی</th>
          <th>بودجه</th>
          <th>تگ‌ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRowTable
              key={project._id}
              project={project}
              index={index}
            
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ProjectTable;
