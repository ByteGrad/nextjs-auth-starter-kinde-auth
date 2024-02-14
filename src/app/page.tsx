import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-52">
      <h1 className="text-3xl font-semibold mb-2">Welcome to the home page!</h1>

      <Link href="/dashboard" className="text-blue-500 underline">
        Go to dashboard
      </Link>

      <div className="flex gap-4 mt-10">
        <LoginLink>Sign in</LoginLink>

        <RegisterLink>Sign up</RegisterLink>
      </div>
    </main>
  );
}
