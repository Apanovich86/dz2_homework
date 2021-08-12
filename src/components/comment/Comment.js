export default function Comment({item}) {
    return (
        <div>
            <h2>postId: {item.postId}</h2>
            <h2>id: {item.id}</h2>
            <p>name: {item.name}</p>
            <p>email: {item.email}</p>
            <p>body: {item.body}</p>
        </div>
    );
}