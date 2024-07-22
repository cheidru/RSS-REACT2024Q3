import React from "react";
import apiSearch from "../../services/api";
import { Props } from "../../services/interface"
// import { string } from "prop-types";

class SearchPanel extends React.Component<Props> {
  state = {
    isSubmitDisabled: true,
    searchString: '',
    inputFocused: false,
    result: [],
    value: '',
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('this.props = ',this.props);
    const seekResult = apiSearch(this.state.searchString.trim());
    seekResult.then(data => {
      // if(this.props.updateSearchResult) this.props.updateSearchResult(data);
      if(this.props.setSearchState) this.props.setSearchState(data);
      console.log('seekResult = ',data);
      })
      .then(() => {console.log('searchResult = ',this.props.searchState);}
    );
  
    
    // this.setState(seekResult);
    this.setState({isSubmitDisabled: true});
    this.setState({inputFocused: false});
    this.setState({value: ''});
    // this.setState(seekResult)
    // console.log('setState = ',);

    // fetch запрос к API и обновление массива searchResult
    // если нет строки запроса, проверка LS, если нет
    // записи в LS, запрос на все записиа API
  }


  render() {
    console.log('SearchPanel props = ', this.props);
    return (
      <div className="panel search-panel">
        <form className="form-search"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            title="Search"
            placeholder={this.state.inputFocused === false? "Search API" : ''}
            className="search-field"
            onFocus={() => {this.setState({inputFocused: true})}}
            value={this.state.value}
            onChange={(e) => {this.setState({
              isSubmitDisabled: e.target.value.length > 0 ? false: true,
              searchString: e.target.value,
              value: e.target.value,
            })}}
          />
          <button
            type="submit"
            className="btn-submit form__login-btn active"
            disabled={this.state.isSubmitDisabled}
          >
            Search
          </button>
        </form>
      </div>

    )
  }
}

export default SearchPanel;