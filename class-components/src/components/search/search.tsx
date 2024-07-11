import React from "react";

// type Props = {
//   searchResult?: [];
// }


class SearchPanel extends React.Component {
  
  state = {
    isSubmitDisabled: true,
    searchString: '',
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitting');
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
            placeholder="Search API"
            className="search-field"
            // value={""}
            onChange={(e) => {this.setState({
              isSubmitDisabled: e.target.value.length > 0 ? false: true,
              searchString: e.target.value
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