export const metadata = {
  title: "Admin Page",
  description: "Admin page not indexed",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
