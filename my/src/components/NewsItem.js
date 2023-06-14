import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let  {title,description, imageUrl, url,author, date }= this.props;

  return (
      <div className="my-3">
               <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/779B/production/_129991603_mediaitem129991112.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <br></br>
<a className="btn btn-primary btn-sm" href="https://facebook.com/dawn.com" role="button" width="6" height="6">Facebook</a>
<a className="btn btn-primary btn-sm" href="https://twitter.com/dawn.com" role="button" width="6" height="6">twitter</a>
<a className="btn btn-primary btn-sm" href="https://instagram.com/dawndot.com" role="button" width="6" height="6">Instagram</a>
    <h5 className="card-title">{title}... <span class="badge bg-secondary">New</span></h5>
    <p className="card-text">{description}</p>

    <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More </a>
    <div className="card-footer">
      <p className="card-text">
      <small className="text-muted">By  :<b> {!author?"Unknow": author}</b> <br></br>on : <u>{date}</u></small></p>
    </div>
   
  </div>
</div>
</div>
      </div>
      
    );
  }
}

export default NewsItem;