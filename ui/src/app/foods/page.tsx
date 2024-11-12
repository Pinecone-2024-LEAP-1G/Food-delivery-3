import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>all foods</h1>
      <Link href="/foods/breakfast">
        <p className="bg-slate-900 w-7 h-7">hello</p>
      </Link>
      <Link href="/foods/soup">
        <p>Bye</p>
      </Link>
    </div>
  );
};

export default Page;
