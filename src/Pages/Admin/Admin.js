import { useMemo } from "react";
import Card from "../../Components/Card/Card"
const Admin =()=>{
    const memoizedChild = useMemo(()=>
        {
            return <Card />;
        });
    return <>
        {memoizedChild}
    </>
}
export default Admin