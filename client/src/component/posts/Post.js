import { Card, Stack } from "@mui/material";

const Post = ({ post, setPosts }) => {
  const handleDelete = async () => {
    await fetch("http://localhost:5000/api/stopwatch/" + post.id, {
      method: "DELETE",
    });

    fetch("http://localhost:5000/api/stopwatch")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    <Stack margin={2}>
      <Card variant="outlined">
        <h2>{post.note}</h2>
        <p>{post.time}</p>
        <p>{post.savedAt}</p>

        <button onClick={handleDelete}>remove</button>
      </Card>
    </Stack>
  );
};

export default Post;
