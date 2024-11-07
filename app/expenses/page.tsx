import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LeftPanel from "@/components/left-panel";

export default async function Expenses() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className=" flex">
      <LeftPanel />
      
      <div className="main-content">
        <h1>Welcome to Kwenta</h1>
        <p>Your intro text goes here.</p>
        <button className="btn">Get Started Now</button>
      </div>
    </div>
  );
}