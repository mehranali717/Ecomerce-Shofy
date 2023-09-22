import { memo } from "react"
import Defaultbtn from "../Button/Button"

const Card =memo(({title, count, onClick})=>{
    return <div className="card" style={{width: 280,marginLeft:150 }}>
                <div className="card-body">
                    <h5 className="card-title">{title}{count}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Defaultbtn value="+1" onClick={onClick}/>
                </div>
        </div>
})
export default Card;