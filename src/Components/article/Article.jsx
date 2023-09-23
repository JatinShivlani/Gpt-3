import React from 'react'
import './article.css'
const Article = (props) => {
  return (
    <div className="blog-container-article">
    <div className="blog-container-article-image">
      <img src={props.imgUrl} alt="blog" />
    </div>
    <div className="blog-container-article-content">
      <div>
        <p>{props.date}</p>
        <h3>{props.text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  )
}

export default Article
