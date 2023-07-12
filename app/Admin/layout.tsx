import Dashboard from "./components/DashBoardComp/Dashboard";

export const metadata = {
  title: "Admin Page",
  description: "Admin page not indexed",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className=" flex h-full ">
    <div className="md:w-3/12 lg:w-2/12  ">
    <Dashboard/>
    </div>
    <div className="  w-full min-h-screen">
    {children}
    </div>
 
   
    </div>;
}
