import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebase";
import Post from "./Post";

export interface Post{
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, 'posts');

  const getPosts =async () => {
    const data = await getDocs(postsRef)
    setPostsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id})) as Post[] );   
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>{postsList?.map(post => <Post post={post} />)}</div>
  )
}

export default Main