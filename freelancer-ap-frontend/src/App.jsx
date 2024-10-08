import { Navigate, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";


import Home from "./pages/Home";

import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
   <DarkModeProvider>
     <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner"  element={<OwnerLayout/>}>
            <Route index  element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard"  element={<OwnerDashboard />} />
            <Route path="projects"  element={<Projects />} />
            <Route path="projects/:id"  element={<Project />} />
          </Route>
          <Route path="/freelancer" element={<FreelancerLayout/>}>
          <Route index  element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FreelancerDashboard/>}/>
          <Route path="proposals" element={<Proposals/>}/>
          <Route path="projects" element={<SubmittedProjects/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
   </DarkModeProvider>
  );
}

export default App;
