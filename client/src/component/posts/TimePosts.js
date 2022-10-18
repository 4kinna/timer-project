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
      {posts.map((post) => (
        <Post post={post} />
      ))}

      {console.log(timePosts)}
    </div>
  );
};

export default TimePosts;
