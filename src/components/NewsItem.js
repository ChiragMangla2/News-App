import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute badge rounded-pill bg-danger" style={{ right: "0px", zIndex: "1" }}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"} className="card-img-top" alt="img" />
                <div className="card-body">
                    <span className="visually-hidden">unread messages</span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small>By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem