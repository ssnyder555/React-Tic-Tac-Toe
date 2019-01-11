import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),

      player: "X"
    }
  }

  handleClick(index){
    let newBoard = this.state.board

    if(this.state.board[index] === null) {
      newBoard[index] = this.state.player

          this.setState({
            board: newBoard,

            player: this.state.player === "X" ? "0" : "X"
          });

    }




  }
  render() {
     const Box = this.state.board.map(
       (box, index) =>

      <div className="box"

        key={index} onClick={(e) =>

          this.handleClick(index)}>{box}</div>)

    return (

      <div className="container">

        <h1>tic-tac-toe app</h1>

          <div className="board">
            {Box}

          </div>
      </div>
    );
  }
}

export default App;
