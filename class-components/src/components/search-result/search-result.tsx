import React from "react";

// type Props = {
//   searchResult?: [];
//   updateSearchResult?: () => void;
// }

class ResultPanel extends React.Component {


  render() {    
    return (
      <>
        {console.log('ResultPanel props = ', this.props)}
        <div className="panel result-panel">
          {/* {this.props.state.searchResult} */}
        </div>
      </>
    )
  }
}

export default ResultPanel;