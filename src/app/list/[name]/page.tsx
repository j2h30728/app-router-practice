import { BestSellerList, CustomResponse } from "@/app/types";
import Image from "next/image";

const BASE_URL = "https://books-api.nomadcoders.workers.dev/list";

async function fetchingBooksByListName(name: string): Promise<CustomResponse<BestSellerList>> {
  const params = new URLSearchParams({ name });
  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error("잠시후 요청 부탁드립니다.");
  }
  return await response.json();
}

export default async function List({ params }: { params: { name: string } }) {
  const bookList = await fetchingBooksByListName(params.name);
  return (
    <>
      <div className="">
        <div className="capitalize text-5xl w-full p-5 rounded-lg font-extrabold text-emerald-600">
          <span className="">{bookList.results.list_name.toUpperCase()}</span>
          <span className="">BOOKS</span>
        </div>
        <div className="books custom-border grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold text-xl">
          {bookList.results.books.map((book) => (
            <div
              className="max-w-[300px] book py-3 custom-border border shadow-xl flex flex-col items-center justify-center gap-2"
              key={book.amazon_product_url}>
              <div className="w-full px-3  max-w-[280px] h-[350px] relative">
                <Image src={book.book_image} fill alt={book.title} />
              </div>
              <div className="flex flex-col px-5 gap-2">
                <h4 className=" underline underline-offset-4 decoration-yellow-300 decoration-op text-3xl font-extrabold mt-2 text-emerald-700 px-2">
                  {book.title}
                </h4>
                <p>{book.author}</p>
              </div>
              <a
                className="mt-auto custom-border border-1 p-2 shadow-lg self-start ml-6 hover:shadow-none hover:bg-slate-100 active:bg-slate-800 active:text-white"
                href={book.amazon_product_url}>
                Buy now &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
