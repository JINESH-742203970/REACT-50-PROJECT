import faq from "../api/faq.json";
import{useState} from "react";
import{useEffect} from "react";
import {FAQ} from "./UI/FAQ";
const Accordion=()=>{
    const[data,setData]=useState([]);
    const[activeId,setActiveId]=useState(false);
    useEffect(()=>{
        setData(faq);
    })
    const handleButton=(id)=>{
        setActiveId((prevId)=>(prevId===id?false:id));
    }
    return (
        <>
        <h1>Accordion</h1>
        <ul className="section-accordion">
            {data.map((currElem)=>{
                return (
                    <FAQ key={currElem.id} currData={currElem} isActive={activeId===currElem.id} onToggle={()=>handleButton(currElem.id)}/>
                )
            })}
        </ul>
        </>
    )
}
export default Accordion;