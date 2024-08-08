import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import React from "react";
import { Props } from '../services/interface'
// import { Props } from "./../services/interface";

class App extends React.Component {

  state: Props = {
    searchResult: []
  }

  // updateSearchResult = (data: []) => {
  //   console.log('Updating setState');
  //   this.setState(
  //     { searchResult: data, }
  //   )
  // }

  render() {
    return (
      <>
        <Header />
        <SearchPanel
          // searchState = {this.state.searchResult}
          updateSearchResult = {(data: []) => {
            this.setState(
              { searchResult: data }
            )
          }}
           />
        <ResultPanel
          searchResult = {this.state.searchResult}
          // {...this.state}
          />
      </>
    );
  }
}

export default App;
