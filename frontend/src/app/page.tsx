import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./utils/authOptions";
import Dashboard from "@/components/Dashboard/Dashboard";

export const metadata: Metadata = {
  title:
    "Akasha Dashboard",
  description: "Dashboard de gerenciamento de pedidos",
};

export default async function Home() {
   const session = await getServerSession(authOptions);
   if (!session) {
    redirect('/auth/signin');
  }
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
