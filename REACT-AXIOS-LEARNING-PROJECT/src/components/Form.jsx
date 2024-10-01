/* eslint-disable react/prop-types */
import{useState} from "react";
import{useEffect} from "react";
import {postData} from "../api/PostApi";
import{updateData} from "../api/PostApi";
const Form=({data,setData,updatedDataApi,setUpdatedDataApi})=>{
    const[addData,setAddData]=useState({
        title:"",
        body:"",
    });
    // let isEmpty=Object.keys(updatedDataApi).length===0;
    useEffect(()=>{
        updatedDataApi && setAddData({
            title:updatedDataApi.title||"",
            body:updatedDataApi.body||"",


        })
    },[updatedDataApi])
    const handleInputChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       setAddData((prev)=>{
         return {
            ...prev,[name]:value,
         };
       });

    };
    const addPostData=async ()=>{
        const res=await postData(addData);
        if(res.status===201){
            setData([...data,res.data]);
        }
    }
    const updatedPostData=async ()=>{
        try
        {

            const res=  await updateData(updatedDataApi.id,addData)
            setData((prev)=>{
                return prev.map((currElem)=>{
                    return currElem.id===updatedDataApi.id?res.data:currElem;
                })
            })
        }
        catch(error){
            console.log(error);
        }
    }
    const handleFormSubmit=(e)=>{
       e.preventDefault();
       const action=e.nativeEvent.submitter.value;
        if(action==="Add"){
            addPostData();
        }
        else if(action==="Edit"){
            updatedPostData();
        }
    }
    return (
        <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="title"></label>
            <input type="text" autoComplete="off" id="title" name="title" placeholder="Add Title" value={addData.title} onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="body"></label>
            <input type="text" autoComplete="off" id="body" name="body" placeholder="Add Post" value={addData.body} onChange={handleInputChange}/>
        </div>
        <button type="submit" value={!updatedDataApi?"Add":"Edit"}>{updatedDataApi?"Edit":"Add"}</button>
        </form>
    )
}
export default Form;