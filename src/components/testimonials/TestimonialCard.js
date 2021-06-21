import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div style={{width:"280px",margin:"10px",backgroundColor:"thistle"}}>
            <div class="col-md-6 mb-4" style={{marginRight:"50%",marginTop:"10px"}}>
                <img class="rounded-circle z-depth-2" alt="90x90" src={props.src}
                    data-holder-rendered="true" />
            </div>
            <div>
                {props.testimonialText}
            </div>
        </div>
    )  
}

export default TestimonialCard
