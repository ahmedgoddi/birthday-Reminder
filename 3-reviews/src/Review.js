import React , {useState} from 'react'
import{FaQuoteRight , FaChevronLeft , FaChevronRight} from "react-icons/fa"
import People from "./data.js"

export default function Review() {
    const [index , setIndex] = useState(0)
    const {name , job , image , text} = People[index]

    const checkNumber = (number) => {
        if(number > People.length-1) {
            return 0 ;
        }
        if(number < 0 ) {
            return People.length -1;
        }
        return number;
    }

    const nextPreson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    const prevPreson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button onClick={prevPreson} className="prev-btn">
                <FaChevronLeft/>
                </button>
                <button onClick={nextPreson} className="next-btn">
                <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn">surprise me</button>
        </article>
    )
}
