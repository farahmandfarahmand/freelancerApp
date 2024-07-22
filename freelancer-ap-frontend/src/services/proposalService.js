import http from "./httpService";

export  function changeProposalStatusApi({id,data}) {//data=>{status:open or close}
  return http.patch(`/proposal/${id}`,data).then(({ data }) => data.data);
}