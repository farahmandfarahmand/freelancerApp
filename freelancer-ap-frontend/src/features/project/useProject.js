import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
  
  const { id } = useParams();
  //? fetch single data with custom hook
  // console.log(id);

  const { data, isLoading } = useQuery({
    queryKey: ["project",id],
    // id=1,2,3
    queryFn: () => getProjectApi(id),
    retry:false,
  });

  const { project } = data || {};
  // console.log(project,"this is useProject hook");
  return { isLoading, project };
}
