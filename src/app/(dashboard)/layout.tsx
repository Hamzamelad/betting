import BasicTabs from "@/components/side-tabs";
import BodyTabs from "@/components/body-tabs";
import BodyNavBar from "@/components/body-tabs";
import CustomizedTables from "@/components/table";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex-[4_4_0%] h-full ">
        <BodyNavBar />
        <div className="mt-4 mx-3">{children}</div>
      </div>
      <div className="flex-1 h-full p-3 border-l bg-white">
        <BasicTabs />
      </div>
    </div>
  );
}
