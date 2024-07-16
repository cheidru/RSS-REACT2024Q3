import React from "react";
export interface SearchProps {
  searchResult?: [];
  updateSearchResult?: () => void;
}

export type Props = {
  searchResult?: [];
  updateSearchResult?: React.Dispatch<React.SetStateAction<string[]>>;
}