import Image from "next/image";
import { CiChat1 } from "react-icons/ci";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <CiChat1 className="mx-auto w-auto text-5xl" />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tighter text-gray-900">
          SIGN IN TO YOUR ACCOUNT
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
