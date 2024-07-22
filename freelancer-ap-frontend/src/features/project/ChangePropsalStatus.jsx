import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus"
import { QueryClient } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import {useParams} from "react-router-dom";

// ?-------------------------------
const options=[
    {
        label:"رد شده",
        value:0,
    },
    {
        label:"در انتظار تایید",
        value:1,
    },
    {
        label:"تایید شده",
        value:2,
    },
]
// ?-------------------------------
function ChangeProposalStatus({proposalId,onClose}) {
    const {id:projectId}=useParams();
  const {register, handleSubmit} = useForm();

const {changeProposalStatus,isUpdating}=useChangeProposalStatus();

  const onMySubmit=(data)=>{
    console.log(data);
changeProposalStatus({id:proposalId,data},
    {
        onSuccess:()=>{
            onClose();
            QueryClient.invalidateQueries({queryKey:["project", projectId]})
        }
    }
)
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit(onMySubmit)} action="">
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
            {
                isUpdating ? <Loading/> :  <button className="btn btn--primary w-full" type="submit">تایید</button>
            }
           
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
