import React, { useRef } from 'react'
import frame1 from "../assets/frame1.svg"
import frame2 from "../assets/frame2.svg"
import frame3 from "../assets/frame3.svg"
import frame4 from "../assets/frame4.svg"
import group1 from "../assets/group1.svg"
import group2 from "../assets/group2.svg"
import group3 from "../assets/group3.svg"
import group4 from "../assets/group4.svg"
import leftarrow from "../assets/leftarrow.svg"
import rightarrow from "../assets/rightarrow.svg"
import "./CarouselFeaturedplaces.css"





const CarouselFeaturedplaces = () => {

    const dataRef: any = useRef();
    console.log(dataRef.current)

    const scrollRight = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: 200,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const data:any = [
        {
            image: frame1,
            footer: group1
        },
        {
            image: frame2,
            footer: group2
        },
        {
            image: frame3,
            footer: group3
        },
        {
            image: frame4 ,
            footer: group4
        },
        {
            image: frame1,
            footer: group1
        },
        {
            image: frame2,
            footer: group2
        },
        {
            image: frame3,
            footer: group3
        },
        {
            image: frame4 ,
            footer: group4
        }
        
    ]

    console.log(data)
    
  return (
      <div className='featured-places-carousel'>
          <h1>Featured Places</h1>

           <div className='carousel'>
                <img src={leftarrow } alt="" className='prev-btn' onClick={scrollLeft}/>
               <div className='carousel-wrapper' ref={dataRef}>
                    {data.map((item:any,index:any) => {
                        return(
                            <div key={index} className="carousel-item">
                                <img src={item.image} alt="" className='carousel-image' />
                                <img src={item.footer} alt="" className='carousel-image' />
                            </div>
                        )
                    })}
               </div>
        {/* {data.length && <div className='carousel-wrapper' ref={dataRef}>
            {data.map((item:any, index:number) => {
                return(
                    <div key={index} className="carousel-item"  >
                <img src={item.image} alt=""  className='carousel-image'/>
                <img src={item.footer} alt="" className='carousel-image' />
            </div>
                )
            })}
            
            </div>
        } */}
        <img src={rightarrow } alt="" onClick={scrollRight} className="carousel1-btn"/>
    </div>
      </div>

    
   
  )
}

export default CarouselFeaturedplaces