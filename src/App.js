import React, { Component } from 'react';
import logo from './imgs/1(1).jpg';
import './App.css';
import Anli from './Anli';
import Territory from './Territory';
import Wl_intro from './Intro';
import Wl_Recruit from './Recruit';

class App extends Component {
  render() {
    return (
      <div className="App">
      	{/*介绍 intro   	<Wl_intro /> */}
       	{/*专业领域  <Territory />*/}
       	
        {/*案例 intro   <Anli />*/}
       	{/*招贤纳士*/}
        <Wl_Recruit />


      </div>
    );
  }
}

export default App;
