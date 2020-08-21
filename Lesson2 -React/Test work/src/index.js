

const button = {
  fontSize: 30 + 'px',

};

class Render extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  changeCounter = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>  
        <header>
            <div className="container">
              <img src="./react-logo.svg" alt="Logo"/>
              <h1>Hello React</h1>
            </div>
        </header>
        <main>
            <div className="container">
              <p>Javascript library</p>
              <button style={button} onClick={this.changeCounter}>{this.state.counter}</button>
            </div>
        </main>
      </div> 
    );
  }
}


ReactDOM.render(<Render/>, document.getElementById('root'))