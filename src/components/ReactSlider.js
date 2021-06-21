import React from 'react'
import Carousel from 'react-bootstrap/Carousel'  


const ReactSlider = () => {
    return (
        <div style={{width:"750px"}}>
           
            <div className='container-fluid' >
                <Carousel>
                    <Carousel.Item style={{ 'height': "400px", width: "700px" }} >
                        <center>
                            <img style={{ 'height': "400px", width: "700px" }}
                                className="d-block w-100"
                                src="/images/sunset.webp" />
                            <Carousel.Caption>
                                <h2>-whatever you do-</h2>
                                <h1 className="display-4">DO WITH</h1>
                                <h3>--all your--</h3>
                                <h1 className="display-2">MIGHT</h1>
                            </Carousel.Caption>
                        </center>
                       
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "400px", width: "700px" }} >
                        <center>
                        <img style={{ 'height': "400px", width: "700px" }}
                            className="d-block w-100"
                                src="/images/quote7.jpg" />
                        </center>   
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "400px", width: "700px"}}>
                        <center>
                        <img style={{ 'height': "400px", width: "700px" }}
                            className="d-block w-100"
                                src="/images/quote6.jpg" />
                        </center>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "400px", width: "700px"}}>
                        <center>
                        <img style={{ 'height': "400px", width: "700px" }}
                            className="d-block w-100"
                                src="/images/quote3.jpg" />
                        </center>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}  


export default ReactSlider;
