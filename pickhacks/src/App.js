import logo from './logo.svg';
import './App.css';
import Options from "./Components/Option"

function App() {
  function handleFriends () {
    console.log("you picked friends");
  }

  function handleAlone(){
    console.log("you picked alone :(");
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Welcome to THE APP. Pick your experience.</h1>
      <div className="row">
      <div className="col">
            <Options phrase="Watching with Friends" handleClick={handleFriends}/>
          </div>
          <div className="col">
            <Options phrase="Find me a Movie Buddy" handleClick={handleAlone}/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
