import Image from "../../Assets/Images/Dashboard.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "../../Components/Card/Card"
const User =()=>{
    return <>
        <LazyLoadImage src={Image}
        width={300} height={250}
        alt="Image Alt"
      />
        <Card />
    </>
}
export default User