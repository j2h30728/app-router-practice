export interface BestSeller {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
export interface CustomResponse<T> {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: T;
}
