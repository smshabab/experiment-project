import './App.css';
import UserLogin from './containers/userLogin/userLogin';
import UserRegistration from './containers/userRegistration/UserRegistration';

function App() {
  return (
    <div className="App">
      <UserLogin/>
      <br/><br/><br/><br/>
      <UserRegistration/>
    </div>
  );
}

export default App;
