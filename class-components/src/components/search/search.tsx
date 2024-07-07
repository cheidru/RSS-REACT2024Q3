import React from "react";
// import { apiSearch } from "../../services/api";

class SearchPanel extends React.Component {
  state = {
    isSubmitDisabled: true,
    searchString: '',
  }

  // handleSubmit(searchResult) {
  //   const apiSearchResult = apiSearch(this.state.searchString);
  // }
  render() {

    return (
      <div className="panel search-panel">
        <form className="form-search">
        {/* <form className="form-search" onSubmit={this.handleSubmit({this.props.searchResult})}> */}
          <input
            type="text"
            title="Search"
            placeholder="Search API"
            className="search-field"
            value={"searchString"}
            onChange={(e) => {this.setState({
              isSubmitDisabled: e.target.value.length > 0 ? false: true,
              searchString: e.target.value
            })}}
          />
          <button
            type="submit"
            className="btn-submit form__login-btn"
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