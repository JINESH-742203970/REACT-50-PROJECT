/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import{useState} from "react";
export const FAQ=({currData,isActive,onToggle})=>{
    const{question,answer}=currData;
    
    return (
        <li key={currData.id}>
             <div className="accordion-grid">
                <p>{question}</p>
                <button onClick={onToggle} className={isActive?"active-btn":""}>{isActive?"close":"show"}</button>
             </div>
             <p>{isActive && answer}</p>
        </li>
    )

    
}





// const{question,answer}=currData;
// const[activeId,setActiveId]=useState(false);
// const handleButton=()=>{
//     setActiveId(!activeId);
// }
// return (
//     <li key={currData.id}>
//          <div className="accordion-grid">
//             <p>{question}</p>
//             <button onClick={handleButton} className={activeId?"active-btn":""}>{activeId?"close":"show"}</button>
//          </div>
//          <p>{activeId && answer}</p>
//     </li>
// )