import Link from "next/link";
import { BestSeller, CustomResponse } from "./types";

const BASE_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function fetchingBestSellers(): Promise<CustomResponse<BestSeller[]>> {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("잠시후 요청 부탁드립니다.");
  }
  return await response.json();
}

export default async function Home() {
  const bestSellers = await fetchingBestSellers();

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className=" text-5xl w-full p-5 rounded-lg font-extrabold">THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div className="flex flex-wrap gap-6">
        {bestSellers.results.map((bestSeller) => (
          <div
            className="custom-border border border-slate-700 p-3 text-xl font-semibold hover:bg-emerald-50 active:bg-emerald-900 active:text-slate-50"
            key={bestSeller.display_name + bestSeller.newest_published_date}>
            <Link href={`/list/${bestSeller.list_name}`}>{bestSeller.list_name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
