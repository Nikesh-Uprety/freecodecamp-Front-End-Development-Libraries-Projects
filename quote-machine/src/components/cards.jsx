import React from 'react'
import { useState, useEffect } from 'react';
import './cards.css';
import LinearIndeterminate from './loadingbar';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export const Quotecard = () => {

  let [quotes, setquotes] = useState([]);
  let [loading, setloading] = useState(false);
  let [loadingbar, setloadingbar] = useState(false);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setloadingbar(false)
        setloading(true)
        setquotes(data)
      });
  }, [])

  const Handleclick = () => {
    setloadingbar(true)
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setloadingbar(false)
        setloading(true)
        setquotes(data)
      });
  }

  loading ? console.log('%cHere is the loaded data', 'color:red') : console.log("Data is not loaded yet!");
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  return (
    <div className="container" id='quote-box'>
        <div className="quote">
          {
            loading ? (<p id='text'>❝  {quotes[randomIndex].text} </p>) : null
          }
        </div>     
        <div className="quote-author">
            {
               loading ? (<p className="author" id="author" >- <i>{quotes[randomIndex].author} </i> </p>) : null
            }
        </div>   
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target='_blank'>Twitter</a>

        <button  onClick={Handleclick} className="button" id="new-quote">Next</button>
    </div>
  )
}
