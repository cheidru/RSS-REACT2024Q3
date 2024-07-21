// import { object } from "prop-types";
// import React from "react";
export interface SearchProps {
  searchResult?: object[];
  updateSearchResult?: () => {};
}

export type Props = {
  searchResult?: object[];
  updateSearchResult?: (data:[]) => void;
  // setState?: React.Dispatch<React.SetStateAction<[]>>
}