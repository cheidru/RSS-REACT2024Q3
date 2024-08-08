import React from "react";
import { Props } from "../../services/interface"

class ResultPanel extends React.Component<Props> {

  render() {
    console.log('ResultPanel props = ', this.props);
    let searchRes = undefined;
    if (this.props.searchState !== undefined) searchRes = this.props.searchState;
    console.log('searchRes = ', searchRes.searchResult);

    return (
      <>
        <div className="panel result-panel">
          <p>Hello</p>
          <div className="result-wrapper">
            {/* {searchRes} */}
          </div>
        </div>
      </>
    )
  }
}

export default ResultPanel;