import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import Post from "./Post";
import Divider from '@mui/material/Divider';


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
      {/* <Stack direction="row" spacing={10} justifyContent="center" alignItems="center"        divider={<Divider orientation="vertical" flexItem />}
>
      <h2>Saved time</h2>
      <h2>note</h2>
        <h2>Delete</h2>
        </Stack> */}
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post} setPosts={setPosts} />
        </div>
      ))}
    </div>
  );
};

export default TimePosts;
