import { Outlet } from "react-router-dom";
import Header from "./Header";



function AppLayout({children}) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header/>
      {/* <Sidebar/> */}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className=" mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

//! we have 3 type user :owner, admin, freelancer so should write (multi app layout)
//* side bar in owner is => dashboard, project,...
//* side bar in freelancer is => dashboard, proposal,...
//* side bar in admin is => dashboard, project, proposal,...