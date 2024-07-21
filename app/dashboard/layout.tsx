import SideNav from "../ui/dashboard/sidenav";
import { inter } from "../ui/font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w=full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`${inter.className} antialiased`}>{children}</div>
    </div>
  );
}
