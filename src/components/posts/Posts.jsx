import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/8261221/pexels-photo-8261221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Post img="https://images.pexels.com/photos/6900713/pexels-photo-6900713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/2174723/pexels-photo-2174723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/3791007/pexels-photo-3791007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?cs=srgb&dl=pexels-irina-iriser-1366957.jpg&fm=jpg" />
    </div>
  );
}
