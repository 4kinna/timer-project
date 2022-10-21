import { useEffect, useState } from "react";
import Post from "./Post";

const TimePosts = ({ fetchTimes, setFetchTimes }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (fetchTimes) {
      const fetchData = async () => {
        const data = await fetch("http://localhost:5000/api/stopwatch/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return data.json();
      };
      fetchData().then((res) => {
        setPosts(res);
        setFetchTimes(false);
      });
    }
  }, [fetchTimes, setFetchTimes]);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} setPosts={setPosts} />
        </div>
      ))}
    </div>
  );
};

export default TimePosts;
