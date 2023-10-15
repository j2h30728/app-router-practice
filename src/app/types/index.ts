export interface CustomResponse<T> {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: T;
}
export interface BestSeller {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
interface Book {
  rank: number;
  publisher: string;
  description: string;
  title: string;
  author: string;
  contributor: string;
  book_image: string;
  amazon_product_url: string;
}
export interface BestSellerList {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: string;
  published_date_description: string;
  previous_published_date: string;
  display_name: string;
  books: Book[];
}
