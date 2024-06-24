export default function InputField () {
  return (
    <div className="flex flex-col gap-[.25rem]">
         <label htmlFor="" className="text-xs text-gray-600 font-[500]">Form title</label>
         <input type="text" name="text" className="w-full px-4 py-2 rounded bg-lightgray" placeholder="Info here..."/>
    </div>
  )
}

