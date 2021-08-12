function getComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
}
function getComment(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts${postId}/comments`)
        .then(value => value.json());
}
export {getComments, getComment};
