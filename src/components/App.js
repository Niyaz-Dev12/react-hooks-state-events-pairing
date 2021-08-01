import {useState} from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments.js";


function App() {
  console.log("Here's your data:", video);

const [videoData,setVideoData]=useState(video);
const [toggleComment,setToggleComment]=useState(false);
 


const handleLikes=()=>{
  setVideoData({...videoData,upvotes:videoData.upvotes+1 });
  }

  const handleDislikes=()=>{

    setVideoData({...videoData,downvotes:videoData.downvotes+1 });
    }

    const handleComments=()=>{
      setToggleComment(prev=>!prev);
    }

const commentArray=videoData.comments.map((comment,index)=>{
  return <Comments key={index} name={comment.user} comment={comment.comment} toggleComment={toggleComment} />
})

  return (
    <div className="App">
      <Video data={videoData}/>
      <VideoDetails data={videoData} onClickLikes={handleLikes} onClickDislikes={handleDislikes} onClickComment={handleComments} toggleComment={toggleComment} />
      <hr />
      <h3>{videoData.comments.length} Comments</h3>
      {commentArray}
    </div>
  );
}

export default App;
