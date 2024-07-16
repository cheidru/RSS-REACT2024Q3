import React from "react";
import { Props } from "../../services/interface"

class ResultPanel extends React.Component<Props> {
  render() {    
    return (
      <>
        {console.log('ResultPanel props = ', this.props)}
        <div className="panel result-panel">
          <p>Hello</p>
          <p>{this.props.searchResult}</p>
          {/* {this.props.state.searchResult} */}
        </div>
      </>
    )
  }
}

export default ResultPanel;