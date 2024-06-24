import { IoTrashOutline } from "react-icons/io5"
import Link from "next/link"

const dummyData = [{
  class: "CSC",
  section: "161",
  number: "02",
  professor: "Weewa, S"
}, {
  class: "MAT",
  section: "132",
  number: "06",
  professor: "Foofa, M"
}, {
  class: "ART",
  section: "105",
  number: "01",
  professor: "Hahada, G"
}]

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="self-start mb-4">
        <h1 className="text-[3rem] font-[200] tracking-tight">
          Manage Snipes
        </h1>
        <h2 className="text-sm text-gray-500">Manage your courses here</h2>
      </div>
      <div className="w-full flex items-center text-center sm:text-[.75rem] sm:px-2 bg-green-main text-white px-4 py-2 rounded-round font-[900]">
        <IoTrashOutline className="flex-1 text-[1.25rem] sm:text-[1rem]"/>
        <div className="flex-[2]">CLASS</div>
        <div className="flex-[2]">SECTION</div>
        <div className="flex-[2]">NUMBER</div>
        <div className="flex-[3]">PROFESSOR</div>
      </div>

      <div className="flex flex-col w-full gap-2">
        {
          dummyData.map((e, i) => {
            return (
              <div className="flex items-center sm:text-sm text-center bg-white shadow px-4 py-2 sm:px-2 rounded-round font-[500]">
                <input type="checkbox" name="" id="" className="flex-1"/>
                <div className="flex-[2]">{e.class}</div>
                <div className="flex-[2]">{e.section}</div>
                <div className="flex-[2]">{e.number}</div>
                <div className="flex-[3]">{e.professor}</div>
              </div>
            )
          })
        }
      </div>


      <Link href='/snipe' className="max-w-[500px] text-center text-lg w-full font-[900] bg-blue-main text-white px-4 py-2 rounded-round">Add More Classes</Link>
    </div>
  )
}

export default Page