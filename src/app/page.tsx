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
    <div className="w-full flex flex-col gap-10 items-center">
      <h1 className="capitalize text-7xl p-5 rounded-lg font-extrabold">THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div className="flex flex-wrap gap-6">
        {bestSellers.results.map((bestSeller) => (
          <div
            className="custom-border border custom-button border-slate-700 p-3 text-xl font-semibold"
            key={bestSeller.display_name + bestSeller.newest_published_date}>
            <Link href={`/list/${bestSeller.list_name_encoded}`}>{bestSeller.list_name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
