import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from "./Actions/";


class App extends Component {
    render() {
        return(
            <div className="App">
              <div className="adjective">
                 <button onClick={()=> this.props.onIncrement("counterOne")}>+</button>
                 <button onClick={()=> this.props.onDecrement("counterOne")}>-</button>
                 <p>{this.props.data.adjectives[this.props.data.counterOne]}</p>
              </div> 
                <div>
                 <button onClick={()=> this.props.onIncrement("counterTwo")}>+</button>
                 <button onClick={()=> this.props.onDecrement("counterTwo")}>-</button>
                  <p>{this.props.data.animals[this.props.data.counterTwo]}</p>
              </div> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onIncrement: id => dispatch(increment(id)),
    onDecrement: id => dispatch(decrement(id)),
})

const mapStateToProps = state => ({
    data: state
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);