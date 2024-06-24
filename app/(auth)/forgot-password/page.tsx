import InputField from "@/components/ui-auth/InputField";

import Link from "next/link";

const Page = () => {
  return (
    <div className="container flex flex-col gap-4 max-w-[350px] rounded-round bg-white p-8 items-center">
      <h1 className="font-bold text-[2rem]">Forgot Password</h1>

      <p className="text-xs text-center text-gray-500">
        If you've forgotten your password, don't worry! Enter your email address
        below, and we'll send you a link to reset your password.
      </p>

      <form action="" className="flex flex-col w-full gap-4">
        <InputField />

        <button className="px-4 py-2 font-bold text-white rounded button bg-blue-main">
          Send
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
