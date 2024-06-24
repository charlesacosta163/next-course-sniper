import InputField from "@/components/ui-auth/InputField";

import Link from "next/link";


const Page = () => {
  return (
    <div className="container flex flex-col gap-4 max-w-[350px] rounded-round bg-white p-8 items-center">
        
    <div className="flex items-center gap-2">
      <img src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" width='50' height='50' alt="Sniper logo" />
      <span className="text-2xl italic font-bold text-blue">Sniper</span>
    </div>
      <h1 className="font-bold text-[2rem]">Login</h1>

      <form action="" className="flex flex-col w-full gap-4">
        <InputField />
        <InputField />

        <Link href='/' className="px-4 py-2 font-bold text-center text-white rounded bg-blue-main">
          Login
        </Link>
      </form>

      <div className="text-sm">
        New to Sniper?{" "}
        <Link href="/create" className="font-[500] underline">
          Create Account
        </Link>
      </div>
      <Link
        href="/forgot-password"
        className="text-blue-main hover:underline text-sm font-[500]"
      >
        Forgot Password
      </Link>
    </div>
  );
};

export default Page;
