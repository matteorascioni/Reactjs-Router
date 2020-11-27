import React, {useState, useEffect} from 'react';
import '../App.css';

function Post(props) {
  useEffect(() => {
    FetchData();
  }, []);

  const [post, setPosts] = useState({});

  const FetchData = async () => {
    const id = props.match.params.id;
    const rowData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await rowData.json();

    setPosts(post);
  } 

  return (
    <div className="App">
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
    </div>
  );
}

export default Post;