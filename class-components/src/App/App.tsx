import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import React from "react";

type Props = {
  searchResult?: [];
  updateSearchResult?: React.Dispatch<React.SetStateAction<string[]>>;
}

class App extends React.Component {

  state: Props = {
    searchResult: [],
    updateSearchResult: () => this.setState({searchResult: Object}),
  }

  // updateSearchResult = () => {
  //   this.setState({searchResult: Object})
  // }

  render() { 
    return (
      <>
        <Header />
        <SearchPanel {...this.state }  />
        <ResultPanel {...this.state.searchResult} />
      </>
    );
  }
}

export default App;
