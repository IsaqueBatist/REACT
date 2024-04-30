const App = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  return(
    <div className="App">
      <h1>Hello World</h1>
      {arr.map((item) => (
        <p>
          {item} * 5 = {item*5}
        </p>
      ))}
    </div>
  )
}

export default App;