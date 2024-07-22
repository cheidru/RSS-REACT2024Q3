// import { object } from "prop-types";
// import React from "react";
export interface SearchProps {
  searchResult?: object[];
  updateSearchResult?: () => {};
}

type searchData = {
  count?: number;
  next?: string;
  previous?: string | null;
  results?: object[];
}

export type Props = {
  searchResult?: searchData;
  searchState?: searchData;
  updateSearchResult?: (data:[]) => void;
  setSearchState?: (data:[]) => void;
  // setState?: React.Dispatch<React.SetStateAction<[]>>
}