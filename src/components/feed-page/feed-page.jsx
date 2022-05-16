import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../firebase/firestore-methods";
import { CreatePost } from "./components/create-post";

const Feed = () => {
  const { token } = useSelector((store) => store.token);
  const { posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getPosts());
    }
  }, []);

  const demo = () => {
    addComment("cKiUYeDXc0RegNnE5vQw", "this is a comment", "anurag");
  };

  return (
    <div className="">
      <CreatePost />
      <button onClick={demo}>
        hellosdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </button>
    </div>
  );
};

export { Feed };
