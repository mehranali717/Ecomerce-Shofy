import { useCallback, useState } from "react"
// import { Input } from "../../Components"
import Card from "../../Components/Card/Card"
const Home =()=>{
   // const [input , setInput] = useState("");
   const [count , setCount] = useState(0)
   const incrementCount =useCallback(()=>{setCount(count +1)} , [count])
   return <>
            {/* <Input onChange={(e)=>setInput(e.target.value)} /> */}
            <Card title="Travel" count ={count} onClick={incrementCount}/>
   </>
}
export default Home