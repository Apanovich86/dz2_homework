import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPost, getPosts} from "../services/post.service";
export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);
    return (
        <div>
            {
                posts.map((value, index) => <Post item={value} key={index}/>)
            }

        </div>
    );
}