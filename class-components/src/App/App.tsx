import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import React from "react";

class App extends React.Component {
  public state = {
    searchResult: []
  }

  onChange = () => {
    this.setState({searchResult: Object})
  }

  render() {
    return (
      <>
        <Header />
        <SearchPanel />
        <ResultPanel />
        {/* <SearchPanel searchResult={this.state.searchResult} />
        <ResultPanel onChange={this.onChange}/> */}
      </>
    );
  }
}

export default App;
