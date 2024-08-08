import Loading from "../../ui/Loading";

import DashboardHeader from "../freelancer/DahboardHeader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";


function DashboardLayout() {
    const {isLoading,proposals}=useProposals();
    console.log("dashbord layout",proposals);
    if (isLoading) return <Loading />;
    return (
      <div className="">
        <DashboardHeader/>
        <Stats projects={proposals} />
      </div>
    );
}

export default DashboardLayout;