import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import React from "react";

class App extends React.Component {
  state = {
    searchResult: []
  }

  onChange = () => {
    this.setState({searchResult: Object})
  }

  handleSubmit() {
    console.log('test');
    // apiSearchResult = apiSearch(this.state.searchString);
  }

  render() { 

    return (
      <>
        <Header />
        <SearchPanel />
        <ResultPanel />
      </>
    );
  }
}

export default App;
