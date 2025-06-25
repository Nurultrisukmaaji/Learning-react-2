import { useState } from "react"
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'

export default function Header() {

    const imagesBanner = [
        {src: banner1, title: 'Enjoy The Coffee'},
        {src: banner2, title: 'Start Your Morning'},
        {src: banner3, title: 'Warm and Fresh'}
    ];


    function ContentHeader({slideImage}) {
        return (
            <>
                {slideImage.map((item, i) => (
                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                        <div className="header-wrap-content d-flex flex-column" style={{ backgroundImage: `linear-gradient(90deg,rgba(255, 255, 255, 0.85) 15%, rgba(0, 0, 0, 0) 58%), url(${item.src})`}}>
                            <div className="container mt-auto mb-auto">
                                <div className="text-banner-wrap">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div> 
                ))}
            </>
        )
    }

    function CarouselIndikator({indikatorCarousel}){
        return (
            <>
                {indikatorCarousel.map((_, index) => (
                    <button type="button" key={index}
                        data-bs-target="#carouselExampleIndicators" 
                        data-bs-slide-to={index} className={index === 0 ? 'active' : ''} 
                        aria-current={index === 0 ? 'true' : 'undefined'} 
                        aria-label={`Slide ${index + 1}`}>
                    </button>
                ))}
            </>
        )
    }

    return(
        <>
            <div className="header">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <CarouselIndikator indikatorCarousel={imagesBanner}/>
                    </div>
                    <div className="carousel-inner">
                        <ContentHeader slideImage={imagesBanner} />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}