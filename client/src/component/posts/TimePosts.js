import { useEffect, useState } from "react";
import Post from "./Post";
import { Button } from "@mui/material";

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

  const handleDelete = async () => {
    await fetch("http://localhost:5000/api/stopwatch/", {
      method: "DELETE",
    });

    fetch("http://localhost:5000/api/stopwatch")
    .then(res => res.json())
    .then(data => setPosts(data))

  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} setPosts={setPosts} />
        </div>
      ))}
      {posts.length > 0 ? 
        <Button onClick={handleDelete}>Delete All</Button> :
        <h4>Start the Stopwatch</h4>
          }
    </div>
  );
};

export default TimePosts;