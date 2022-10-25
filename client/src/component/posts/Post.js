import { Card, Stack, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";

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
    <Card variant="outlined">
      <Stack
        margin={4}
        direction="row"
        spacing={4}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
      >
        <h2>{post.time}</h2>
        <div>
          <h4>{post.note}</h4>
          <h6>{"Saved at: " + post.savedAt}</h6>
        </div>
        <Button onClick={handleDelete} color="error">
          {/* andra ikoner funkar inte, code- ghosts again :D testa en gång till  */}
          <RemoveIcon />
          Remove
        </Button>
      </Stack>
    </Card>
  );
};

export default Post;
