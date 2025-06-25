import { useState } from "react"
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'

export default function Header() {


    function ContentHeader() {
        return(
            <div className="header-wrap-content d-flex flex-column" style={{ backgroundImage: `url(${banner1})`}}>
                <div className="container mt-auto mb-auto">
                    <div className="text-banner-wrap">
                        <h1>Enjoy The Coffee</h1>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            <header>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ContentHeader />
                        </div>
                        <div className="carousel-item">
                            <ContentHeader />
                        </div>
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
            </header>
        </>
    )
}