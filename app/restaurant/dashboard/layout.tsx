import SideNav from "@components/restaurant/SideNav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid p-4 gap-4 grid-cols-restaurant grid-rows-1">
      <SideNav />
      {children}
    </div>
  );
}
