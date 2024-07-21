import React from "react";
import { Props } from "../../services/interface"

class ResultPanel extends React.Component<Props> {

  render() {
    console.log('ResultPanel props = ');
    const searchRes = this.props.searchResult;
    const results = searchRes?.map(showResults);
    function showResults(item: object, index: number) {
      return `<div
          className="searchItem"
          key=${index}
          >
            ${item}
        </div>`
    };


    return (
      <>
        <div className="panel result-panel">
          <p>Hello</p>
          {results}
        </div>
      </>
    )
  }
}

export default ResultPanel;