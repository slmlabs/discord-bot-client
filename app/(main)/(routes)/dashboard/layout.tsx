import { Appbar } from "@/components/navigation/appbar";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div
        className={`hidden md:flex h-full w-[100px] z-30 flex-col fixed inset-y-0 p-6 text-[#EEEEEE] bg-[#393E46] dark:bg-neutral-950`}
      >
        <NavigationSidebar />
      </div>

      <main className={`md:ml-[100px] h-full`}>
        <Appbar />
        <>{children}</>
      </main>
    </div>
  );
};

export default DashboardLayout;
