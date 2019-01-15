import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
  handleSetPlayer(e){
    this.props.setPlayer(e)
  }

  render() {

    return (

      this.props.player ?

      <h2>The Next player is {this.props.player}</h2> :

      <Player player={(e) => this.handleSetPlayer(e)} />



  )
}
}

export default Status;
