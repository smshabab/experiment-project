import './App.css';
import UserLogin from './components/userLogin/userLogin';
import UserRegistration from './components/userRegistration/UserRegistration';

function App() {
  return (
    <div className="App">
      <UserLogin/>
      <UserRegistration/>
    </div>
  );
}

export default App;
