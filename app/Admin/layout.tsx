import Dashboard from "./components/DashBoardComp/Dashboard";

export const metadata = {
  title: "Admin Page",
  description: "Admin page not indexed",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className=" flex w-full">
    <Dashboard/>
    {children}
    </div>;
}
