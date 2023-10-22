
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "@/components/registerForm";

export default async function Register() {
  const session = await getServerSession(authOptions);
console.log(session);
  if (session) redirect("/dashboard");

  return <RegisterForm />;
}