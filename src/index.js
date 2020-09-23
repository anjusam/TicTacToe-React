import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    //Forgetting () => and writing onClick={alert('click')} is a common mistake
    return (
      <button className="square" 
        onClick = {this.props.onClickker}>          
        {this.props.value}
      </button>
      //onClick = {()=>this.props.onClickker(1)}
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turn : 'X',
      squares : Array(9).fill(null),
    }
  }

  clickMe = (i)=>{ 
    console.log("TURN "+ this.state.turn )   
    const squares = this.state.squares.slice();
    squares[i] = this.state.turn;
    const turn = this.state.turn === 'X'? 'O' : 'X';
    console.log("squares "+ squares )
    this.setState({
      squares: squares,
      turn : turn});
    
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClickker={()=> this.clickMe(i)}/>;
    //onClickker={(k)=> this.clickMe(i)
  }

  render() {
    const status = 'Next player: ' + this.state.turn;
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
