import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main className="flex flex-col justify-center items-center pt-52">
      <h1 className="text-3xl font-semibold mb-2">
        This is the private dashboard
      </h1>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
