import React from "react";
import styled from "styled-components";
import Image from "next/image";
import img2 from "../../public/images/glasses/glass1.jpg";


const SliderHolder=styled.div`
width:100%;


`
const SliderSection = () => {
  return (
    <SliderHolder
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

<button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>

<button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>

<button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>

<button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>


        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active myimages">
          <img
            src="images/slides/aloo.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>
        <div className="carousel-item myimages">
          <img
            src="images/slides/ll.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>

        <div className="carousel-item myimages">
          <img
            src="images/slides/min.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>

        <div className="carousel-item myimages" style={{}}>
          <img
            src="images/slides/yy.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>

        <div className="carousel-item myimages">
          <img
            src="images/slides/mm.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>

        <div className="carousel-item myimages">
          <img
            src="images/slides/pp.jpg"
            className="d-block w-100"
            alt="..."
          />
         
        </div>

        <div className="carousel-item myimages">
          <img
            src="images/slides/ww.jpg"
            className="d-block w-100"
            alt="..."
          />
          
        </div>


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </SliderHolder>
  );
};

export default SliderSection;
