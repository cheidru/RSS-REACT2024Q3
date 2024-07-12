import React from "react";

class ResultPanel extends React.Component {
  itemList = this.prop.result.map(populate).join('');
  function populate(params:type) {
    
  }

  render() {
    return (
      <div className="panel result-panel">
        {this.itemList}
      </div>
    )
  }
}

export default ResultPanel;