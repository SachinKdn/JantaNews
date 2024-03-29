import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }
  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
    // this.props.query(this.state.searchInput)
  };
  handleSearch = ()=>{
    // var inpu = document.getElementById('searchInput').value;
    this.props.query(this.state.searchInput)
  }
  render() {
    return (
      <div>
         <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Janta News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" id='searchInput' type="search" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="button" onClick={this.handleSearch}>Search</button>
      </form>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
