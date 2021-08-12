import {useEffect, useState} from "react";
import {getComments} from "../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);
    return (
        <div>
            {
                comments.map((value, index) => <Comment item={value} key={index}/>)
            }
        </div>
    );
}