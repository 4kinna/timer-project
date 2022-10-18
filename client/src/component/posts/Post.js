import { Card, Stack } from "@mui/material";

const Post = ({ post }) => {
  return (
    <Stack margin={2}>
      <Card variant="outlined">
        <h2>{post.note}</h2>
        <p>{post.time}</p>
        <p>{post.savedAt.toISOString()}</p>
      </Card>
    </Stack>
  );
};

export default Post;
