import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export default function News(prop) {
  const [data, setData] = useState([])
  const [page,setPage] = useState(prop.page)
  const [loading, showLoading] = useState(true)
  let total_pages = 0;


  useEffect(() => {
    //Runs only on the first render
    fetchdata();
   
  }, [page]); // useEFFECT aik hook jisme render hone kai baad yeh function chalaigha  iski jaga we can use componentDidMount also which is async function 

  let fetchdata = async () =>{
  
    let response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${prop.category}&apiKey=4a72863ebe4a4279a35fb0733667932b&page=${page}`)
    let parsedata=await response.json()
    setData(parsedata.articles)
    showLoading(false);
      
  }



  let handleLeftClick=()=>{
    if (page==2){
      setPage(page-1)
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      });
    }
  }

  let handleRightClick=()=>{
    if (page==1){
      setPage(page+1)
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      });
    }
  }


  return (
    <div className='container my-5'>
      <h1>Top headlines - {prop.title} </h1>
      <br />
      <div className='text-center'>
      {loading && <Spinner/>}
      </div>
      
      <div className='row'>
        {data.map((object)=>{
             return(<div className="col-md-4 my-3 "  key={object.url} >
             <NewsItem newsObject={object}/>
             </div>)
        })}

      </div>

       <br />
      <div className='container d-flex justify-content-between'>
        <button className='btn btn-outline-warning' onClick={handleLeftClick}>&larr; Previous</button>
        <button className='btn btn-outline-warning'onClick={handleRightClick}>Next &rarr; </button>

      </div>





    </div>
  )
}
News.defaultProps = {
  category:'general'
};
