import './App.css';
import Header from './components/ui/Header'
import Side_Bar from './components/ui/Side-Bar'
import Login_Signup from './components/ui/Login-Signup'
import RendererApp from './components/login/renderer.js';
const App = ()=>{
  return (
    <div className="body-container">
      <Header/>
      <div id="main-body"> 
          <Side_Bar/>
          <RendererApp/>
          <Login_Signup/>
      </div>
      </div>
  );
}

export default App;
