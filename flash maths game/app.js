class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      score: 0,
      res: "",
      incorrect:false,
    };
  }
renderWin(){
  return(
  <div id="container">
    <h2>hey Bro..! You won this..you Are Genious.. </h2>
    <p>thanks...for Trying</p>
  </div>
  );
}
renderloser(){
  return (
    <div className="incorrect">
      <h2>hey Bro..! You lose this..you Are Looser.. </h2>

      <p>if you Feel hard ...simply Use calculator or finger to count This</p>
      <p>thanks...for Trying</p>
    </div>
  );
}

render(){
  if(this.state.score>=5){
    return this.renderWin();
  }
   else if(this.state.score==-5){
    return this.renderloser()
  }
  else{
    return this.renderProblem()
  }
}
  renderProblem() {
    return (
      <div id="container">
        <div className={this.state.incorrect ? "incorrect" : ""}>
          <p>{this.state.num1}</p>
          <p>+</p>
          <p>{this.state.num2}</p>
          <div>
            <p>score:{this.state.score}</p>
          </div>
          <div>
            <input
              onKeyPress={this.key}
              onChange={this.change}
              value={this.state.res}
            ></input>
          </div>
        </div>
      </div>
    );
  }


  change = (event) => {
    this.setState({
     
      res: event.target.value,
    });
  };

key=(event)=>{
  if(event.key=="Enter"){
   var ans =parseInt( this.state.res);
    if(ans == this.state.num1+this.state.num2){
        this.setState((old) => ({
          score: old.score + 1,
          res:'',
          num1: Math.floor(Math.random() * 20),
          num2: Math.floor(Math.random() * 20),
          incorrect:false,
        }));
    }
    else{
      this.setState(state=>({
        res:'',
        incorrect:true,
        score:this.state.score-1,
      }
      )
      );
    }
    
  }
}

}
ReactDOM.render(<Name/>,document.getElementById('root'));



