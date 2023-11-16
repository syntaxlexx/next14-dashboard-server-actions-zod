import VisitsChart from "@/components/charts/visits-chart";
import Rightbar from "./rightbar";

interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col md:flex-row mt-4">
      <div className="w-full md:flex-grow">
        <VisitsChart />
      </div>
      <div className="w-full md:w-64 relative">
        <div className="md:sticky md:top-0 space-y-4">
          <Rightbar />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Page;
