import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../api/PostApi";
import{deletePost} from "../api/PostApi";
import Form from "../components/Form";
import "../App.css";

const Post = () => {
  const [data, setData] = useState([]);
  const[updatedDataApi,setUpdatedDataApi]=useState({});
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePost=(currElem)=>{
    setUpdatedDataApi(currElem);
  }

  return (
    <>
    <section className="section-form">
        <Form data={data} setData={setData} updatedDataApi={updatedDataApi} setUpdatedDataApi={setUpdatedDataApi}/>
    </section>
    <section className="section-post">
      <ol>
        {data.map((currElem) => {
            const { id, body, title } = currElem;
            return (
                <li key={id}>
              <p>Title:{title}</p>
              <p>Body:{body}</p>
              <button onClick={()=>handleUpdatePost(currElem)} >Edit</button>
              <button className="btn-delete" onClick={()=>handleDeletePost(id)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </section>
</>
  );
};
export default Post;
