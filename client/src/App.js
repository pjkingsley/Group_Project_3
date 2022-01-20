import './App.css';
import Header from './components/ui/Header'
import SideBar from './components/ui/Side-Bar'
import LoginSignup from './components/ui/Login-Signup'
import RendererApp from './components/login/renderer.js';
const App = ()=>{
  return (
    <div className="body-container">
      <Header/>
      <div id="main-body"> 
          <SideBar/>
          <RendererApp/>
          <LoginSignup/>
      </div>
      </div>
  );
}

export default App;
