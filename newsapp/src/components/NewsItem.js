import React from 'react'

export default function NewsItem(props) {
  let {title,description,urlToImage,url}=props.newsObject;  
  return (
    <div>
        <div className="card bg-dark border border-rounded border-1" style={{width: '100%',height:'max-content'}}>
        <img src={urlToImage?urlToImage:'/logo192.png'} className="card-img-top" alt=""/>
        <div className="card-body" style={{display:'flex',flexDirection:'column'}}>
            <h5 className="card-title">{title?title.slice(0,60)+"...":"title not mentioned"}</h5>
            <p className="card-text">{description?description.slice(0,60)+(description.length>88?"...":""):'descript not found'}</p>
            <a href={url?url:""} target="_blank" className="btn btn-light" style={{alignSelf:'end'}}>View more</a>
        </div>
        </div>
       
      
    </div>
  )
}
