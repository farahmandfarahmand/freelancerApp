import http from "./httpService";

export  function changeProposalStatusApi({id,data}) {//data=>{status:open or close}
  return http.patch(`/proposal/${id}`,data).then(({ data }) => data.data);
}


export  function getProposalsApi() {//data=>{status:open or close}
  return http.get(`/proposal/list`).then(({ data }) => console.log("proposal data from server:",data.data));
}

export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
