import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : this.props.value
    }
  }
// adding a comment
  squareClickHandler = () =>{
    this.setState({
      value : this.state.value +1,
    });
    this.props.onClickker();
  }
  render() {
    //Forgetting () => and writing onClick={alert('click')} is a common mistake
    return (
      <button className="square" 
        onClick = {() => this.squareClickHandler()}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turn : 'X'
    }
  }

  clickMe = ()=>{
    console.log("clickedme");
    this.setState({
      turn : this.state.turn === 'X'? 'O' : 'X',
    })
  }

  renderSquare(i) {
    return <Square value={i} onClickker={()=> this.clickMe()}/>;
  }

  render() {
    //const turn = this.state.turn === 'X'? 'O' : 'X'
    const status = 'Next player: ' + this.state.turn;
    // this.setState({
    //   turn : this.turn,
    // })
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
