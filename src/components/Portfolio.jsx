import React from 'react'
import portfolio from '../assets/data/portfolio';
import "../assets/css/Portfolio.css"

function Portfolio() {
  return (
    <>
      <div className="portfolio-section">
        <div className="portfolio-text-section">
            <h3 className="portfolio-title">Portfolio</h3>
            <p className="portfolio-p-text">Have a look at some of my PROJECTS</p>
            <p className="portfolio-s-text">For a complete list of my PROJECTS please visit my <a href="http://github.com/PranavTrip" target="_blank"><i className="fa-brands fa-github"></i></a></p>
        </div>
        <div className="portfolio-image-section">
            <div className="portfolio-image-container">
              {portfolio.map((element)=>{
                  return(
                    <div className='portfolio-data' key={element.id}>
                      <img src={element.image} alt="portfolio-image" className="portfolio-image img-fluid"/>
                      <p className="portfolio-description">
                        {element.title}
                      </p>
                      <small><a href={element.link}>Link</a></small>
                      <small>{element.date}</small>
                    </div>
                  )
              })}
            </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
