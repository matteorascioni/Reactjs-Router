import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Home() {
  useEffect(() => {
    FetchData();
  }, []);

  const [posts, setPosts] = useState([]);

  const FetchData = async () => {
    const rowData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await rowData.json();
    const posts = data.slice(0,10);

    setPosts(posts);
  } 

  return (
    <div className="App">
        {posts.map(post => (
          <Link to={`/${post.id}`}>
            <h4 key={post.id}>{post.title}</h4>
          </Link>
        ))}
    </div>
  );
}

export default Home;