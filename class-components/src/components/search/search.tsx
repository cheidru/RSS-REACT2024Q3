import React from "react";
// import PropTypes from 'prop-types';
import apiSearch from "../../services/api";
// import SearchProp from "../../services/interface"

type Props = {
  searchResult?: [];
  updateSearchResult?: React.Dispatch<React.SetStateAction<string[]>>;
}

class SearchPanel extends React.Component<Props> {
  // constructor(props: Props) {
  //   super(props);
  //   console.log('props = ', this.props);
  //   console.log('state = ', props.searchResult);
  // }
  
  state = {
    isSubmitDisabled: true,
    searchString: '',
    inputFocused: false,
    result: [],
    value: '',
  }


  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const seekResult = apiSearch(this.state.searchString.trim());
    // this.props.updateSearchResult(seekResult.finally)
    seekResult.then((data) => (console.log('seekResult = ',data)));
    console.log('searchResult = ',this.props.searchResult);
    if(this.props.updateSearchResult) this.props.updateSearchResult(['hello']);
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