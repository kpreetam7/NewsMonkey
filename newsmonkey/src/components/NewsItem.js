import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl}= this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://cdn.mos.cms.futurecdn.net/7f4LnhCWK2XCRqEc9dPo3V-1200-80.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
