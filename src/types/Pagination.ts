export type PaginationProps = {
  totalRecordsNumber: number,
  recordsPerPage: number,
  onPageNumberChange?: (pageNumber: number) => void,
  siblingsNumber?: number
};

export type PagerProps = {
  DOTS: -1,
  currentPage: number,
  currentCells: number[],
  onChangePageClick: (pageNumber: number) => void,
}