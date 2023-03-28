import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'



export default function News() {
  const [data, setData] = useState([])
  const [page,setPage] = useState(1)
  let total_pages = 0;


  useEffect(() => {
    //Runs only on the first render
     fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4a72863ebe4a4279a35fb0733667932b&page=${page}`)
      .then((response) => response.json())
      .then((data) => setData(data.articles))
      .catch((error) => console.error(error))
   
  }, [page]); // useEFFECT aik hook jisme render hone kai baad yeh function chalaigha  iski jaga we can use componentDidMount also which is async function 




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
      <h1>Top headlines</h1>
      <br />
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
