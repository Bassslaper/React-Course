const render = (
  <>
    <header>
      <div className="container">
        <img src="./react-logo.svg" alt="Logo" />
        <h1>Hello React</h1>
      </div>
    </header>
    <main>
      <div className="container">
        <p>Javascript library</p>
      </div>
    </main>
  <>
);


ReactDOM.render(render, document.getElementById('root'));