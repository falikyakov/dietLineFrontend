import React,{useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {

    const [myDate, setMyDate] = useState();

    const changeMyDate = (e) => {
        setMyDate(e.target.value);
}

    return (

        <Container>

            <h1 className="display-3" style={{ textAlign: "center" }}>Testimonials</h1>
            <input type="date" name="myDate" onChange={changeMyDate}></input>
            <h1>{ myDate}</h1>
            <center> <Row>
                <TestimonialCard src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" testimonialText="kbksdbskdvbskhvb  bfkhsdbfkhdbfk  kdfbkbfkahbf"/>
                <TestimonialCard src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" testimonialText="kbksdbskdvbskhvb  bfkhsdbfkhdbfk  kdfbkbfkahbf" />
                <TestimonialCard src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" testimonialText="kbksdbskdvbskhvb  bfkhsdbfkhdbfk  kdfbkbfkahbf" />
                <TestimonialCard src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" testimonialText="kbksdbskdvbskhvb  bfkhsdbfkhdbfk  kdfbkbfkahbf" />
            </Row></center>
        </Container>
    )
}

export default Testimonials
