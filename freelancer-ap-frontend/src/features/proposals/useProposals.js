import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });
  // if (error){
  //   console.error("Error fetching proposals:", error);
  // }
  // const { proposals } = data || {};
  console.log("useProposal is :", data);
  
  return { isLoading, proposals:data };
}
