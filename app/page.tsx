import Link from "next/link";


export default function Home() {
  return (
    <div className=" flex flex-col items-center min-h-screen " >
      <h1 className="text-3xl font-bold mb-6 text-center" >Wellcome to next js</h1>
      <Link href="/users" className="text-2xl"> click to get User List</Link>
    </div>
  );
}
