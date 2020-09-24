import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    //Forgetting () => and writing onClick={alert('click')} is a common mistake
    // change to function component when the function has no state of its own
    return (
      <button className="square" 
        onClick = {props.onClickker}>          
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turn : 'X',
      squares : Array(9).fill(null),
      //gameWon: false,
    }
  }

  clickMe = (i)=>{     
      const squares = this.state.squares.slice();
      if(!this.findWinner() && !squares[i] ){
        squares[i] = this.state.turn;
        console.log('new squares' + squares);
        const turn = this.state.turn === 'X'? 'O' : 'X';
        this.setState({
          squares: squares,
          turn : turn});
          // the squares in the 2 consoles in this function do not match until this function finsihes execution
          // becasue of immutability.
          // iff chamged to => const squares = this.state.squares
          // the 2 consoles will be same
          console.log('updated squares', this.state.squares)

      }
      
  }

  findWinner = () => {
    //console.log('squares ' + this.state.squares); 
    let squares = this.state.squares;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for ( let i = 0; i< lines.length; i++ ){
      var [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] ===squares[c]){        
        // updating the state within a render function will create infinte loops
        // this.setState({
        //   gameWon : true,
        // });
        return true;
      }        
    }
    return false;
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClickker={()=> this.clickMe(i)}/>;
  }

  render() {
    let winner = this.findWinner();
    let status;
    if(winner){
      status = 'Winner '+ (this.state.turn === 'X'? 'O' : 'X');
    }else{
      status = 'Next player: ' + this.state.turn;
    }
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
