import { useState } from "react";
import Post from "./Post";

const TimePosts = () => {
  const timePosts = [
    {
      note: "Run 3k",
      time: "00:30:00",
      savedAt: new Date(),
    },
  ];
  const [posts, setPosts] = useState(timePosts);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} />
        </div>
      ))}

      {console.log(timePosts)}
    </div>
  );
};

export default TimePosts;
