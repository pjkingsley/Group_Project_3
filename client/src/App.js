import './App.css';
import Header from './components/ui/Header'
import Side_Bar from './components/ui/Side-Bar'
import Login_Signup from './components/ui/Login-Signup'
const App = ()=>{
  return (
    <div className="body-container">
      <Header/>
      <div id="main-body"> 
          <Side_Bar/>
          <Login_Signup/>
      </div>
      </div>
  );
}

export default App;
