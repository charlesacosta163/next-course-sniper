import CourseInput from "@/components/items/CourseInput";
import { classSamples } from "@/lib/data";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-[3rem] font-[200] tracking-tight">
          Snipe a Course
        </h1>
        <h2 className="text-sm text-gray-500">Find everything here</h2>
      </div>

      <CourseInput />

      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
        {classSamples.map((e, i) => {
          return (
            <div className="flex justify-between gap-2 p-4 bg-gray-100 shadow rounded-round sm:text-sm">
              <div id="left" className="flex flex-col justify-between flex-[3]">
                <div>
                  <div className="font-[500]">{e.classCode}</div>
                  <div>{e.className}</div>
                </div>

                <div>Available Seats: {e.availableSeats}</div>
              </div>

              <div id="right" className="flex flex-col justify-between flex-[2] gap-4 text-right">
                  <div>
                    <div>{e.term}</div>
                    <div>{e.instructor}</div>
                  </div> 

                  <button className="self-end px-4 py-2 font-bold text-white rounded-round bg-blue-main">Snipe</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default Page;
