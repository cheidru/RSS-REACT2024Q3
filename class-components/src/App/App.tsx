import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import React from "react";

type Props = {
  searchResult?: [];
  updateSearchResult?: () => void;
}

class App extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state.updateSearchResult = this.state.updateSearchResult.bind(this)
  }


  state = {
    searchResult: ['test'],
    updateSearchResult: () => this.setState({searchResult: Object}),
  }

  // updateSearchResult = () => {
  //   this.setState({searchResult: Object})
  // }

  render() { 
    return (
      <>
        <Header />
        <SearchPanel {...this.state} />
        <ResultPanel {...this.state.searchResult} />
      </>
    );
  }
}

export default App;
