

const button = {
  fontSize: 30 + 'px',

};

function Render(){

  const [count, changeCount] = React.useState(0);
  console.log('count: ', count);
  console.log('changeCount: ', changeCount);


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
              <button style={button} onClick={() => changeCount(count + 1)}>{count}</button>
            </div>
        </main>
      </div> 
    );

}


ReactDOM.render(<Render/>, document.getElementById('root'))