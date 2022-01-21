import './App.css';
import Header from './components/ui/Header'
import NavBar from './components/ui/Side-Bar'
import RendererApp from './components/login/renderer.js';
import React, {Component} from 'react'
import ScrollTest from './components/ui/Scroll-Test.js'
import AboutUsPage from './components/ui/AboutUsPage'

class App extends Component{
  render(){
    return (    
    <div className="body-container">
    <Header/>
    <NavBar/>
    <div id="main-body"> 
        {/* <RendererApp/> */}
        <AboutUsPage/>
    </div>
    </div>)

}
}
export default App;
