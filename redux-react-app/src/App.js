import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <br />
      <Logout />
      <br />
      {/* <ChangeColor /> */}

    </div>
  );
}

export default App;
