import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function Home() {
	const session = await auth()

  return (
    <div className="flex flex-col flex-1 gap-3 h-screen items-center justify-center">
			<p>{JSON.stringify(session, null, 2)}</p>
			<Button className="">Add</Button>
    </div>
  );
}
