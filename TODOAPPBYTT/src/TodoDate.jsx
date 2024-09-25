import{useState} from "react";
import{useEffect} from "react";
const TodoDate=()=>{
    const[dateTime,setDateTime]=useState("");
    useEffect(()=>{
     const interval=setInterval(()=>{
        const now=new Date();
        const formattedDate=now.toLocaleDateString();
        const formattedTime=now.toLocaleTimeString();
        setDateTime(`${formattedDate}-${formattedTime}`);
     },1000);
     return (()=>clearInterval(interval));
    },[])
    return (
        <p>{dateTime}</p>
    )
}
export default TodoDate;
// state;{checked:false,content:"dadsd",id:"dadsd"}