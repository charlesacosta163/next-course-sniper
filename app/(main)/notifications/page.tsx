import { FaX } from "react-icons/fa6";
import { GoTelescope } from "react-icons/go";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">

      <div>
        <h1 className="text-[3rem] font-[200] tracking-tight">
          Notifications
        </h1>
        <h2 className="text-sm text-gray-500">All your feed here</h2>
      </div>

      <div className="text-sm text-gray-700 font-[500]">You have 3 notifications</div>

      <div className="flex flex-col gap-2 sm:text-xs">

        {/* Notification Component Structure */}
        <div className="flex items-center justify-between w-full gap-4 px-4 py-2 bg-white shadow rounded-round">
          <div className="flex items-center gap-4">
            <GoTelescope className="text-[1.5rem]" />
            <span><span className="font-bold">CSC-161-02</span> amet consectetur adipisicing elit. Consequatur, voluptates?</span>
          </div>

          <FaX />
        </div>

        <div className="flex items-center justify-between w-full px-4 py-2 bg-white shadow rounded-round">
          <div className="flex items-center gap-4">
            <GoTelescope className="text-[1.5rem]" />
            <span><span className="font-bold">CSC-161-02</span> amet consectetur adipisicing elit. Consequatur, voluptates?</span>
          </div>

          <FaX />
        </div>

        <div className="flex items-center justify-between w-full px-4 py-2 bg-white shadow rounded-round">
          <div className="flex items-center gap-4">
            <GoTelescope className="text-[1.5rem]" />
            <span><span className="font-bold">CSC-161-02</span> amet consectetur adipisicing elit. Consequatur, voluptates?</span>
          </div>

          <FaX />
        </div>
        
      </div>

    </div>
  );
};

export default Page;
