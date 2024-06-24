import InputField from "@/components/ui-auth/InputField";

import Link from "next/link";

const Page = () => {
  return (
    <div className="container flex flex-col gap-4 max-w-[350px] rounded-round bg-white p-8 items-center">
      <h1 className="font-bold text-[2rem]">Create Account</h1>

      <form action="" className="flex flex-col w-full gap-4">
        <div className="flex gap-2">
          <InputField />
          <InputField />
        </div>

        <InputField />
        <InputField />
        <InputField />

        <button className="px-4 py-2 font-bold text-white rounded button bg-blue-main">
          Create
        </button>
      </form>

      <Link
        href="/login"
        className="text-blue hover:underline text-sm font-[500]"
      >
        Back to Login Page
      </Link>
    </div>
  );
};

export default Page;
