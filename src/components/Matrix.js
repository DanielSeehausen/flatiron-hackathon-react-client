import React, { Component } from 'react'
import { connect } from "react-redux"
import GridRow from './GridRow'

class Matrix extends Component {

  makeRows = () => this.props.matrix.map((row, rowIdx) => <GridRow key={rowIdx} rowIdx={rowIdx} colVals={row}/>)

  render() {
    return (
      <div id="matrix" style={{height: this.props.matrix}}>
        {this.makeRows()}
      </div>
    );
  }
}

const mapStateToProps = ({ matrix }) => ({ matrix })

export default connect(mapStateToProps)(Matrix)
