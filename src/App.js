
import './App.css';

import React, { Component ,Fragment} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  constructor(){
    super();
    this.state = ({
      query : "",
      getQuery : this.getQuery,
      progress:0
    })
  }

  getQuery = (inpu) =>{
    console.log("the getQuery function called")
    console.log(inpu)
    this.setState({
      query : inpu
    }) 
  };

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }


  render() {
    return (
      <div>
        
        <Router>
        <Navbar query={this.state.getQuery} />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={this.setProgress(0)}
      /> 
          <Fragment>
            <Routes>
            <Route exact path='/'  element={<News setProgress={this.setProgress}  key="general" country='in' category="general" query={this.state.query}/>}/>
            <Route exact path='/business'  element={<News setProgress={this.setProgress}  key="business" country='in' category="business"query={this.state.query}/>}/>
            <Route exact path='/entertainment'  element={<News setProgress={this.setProgress}  key="entertainment" country='in' category="entertainment"query={this.state.query}/>}/>
            <Route exact path='/health'  element={<News setProgress={this.setProgress}  key="health" country='in' category="health"query={this.state.query}/>}/>
            <Route exact path='/science'  element={<News setProgress={this.setProgress}  key="science" country='in' category="science"query={this.state.query}/>}/>
            <Route exact path='/sports'  element={<News setProgress={this.setProgress}  key="sports" country='in' category="sports"query={this.state.query}/>}/>
            <Route exact path='/technology'  element={<News setProgress={this.setProgress}  key="technology" country='in' category="technology"query={this.state.query}/>}/>
            </Routes>
          </Fragment>
        </Router>
         
       
      </div>
    )
  }
}

