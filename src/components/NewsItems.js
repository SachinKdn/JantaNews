import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
      let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card" style={{width: "", margin:'15px'}}>
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger z-1' style={{left: '88%'}} >Exclusive News</span>
            <img src={!imageUrl?"https://scitechdaily.com/images/OSIRIS-REx-Sample-Return-Landing-5-scaled.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">

                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl}  rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More...</a>
                     
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItems



