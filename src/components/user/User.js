import Address from "../address/Address";

export default function User({item, item: {address}}) {

    return (
        <div>
            <h2>Name: {item.name}</h2>
            <h2>id: {item.id}</h2>
            <p>email: {item.email}</p>
            <p>username: {item.username}</p>
            <Address address={address}/>

        </div>
    )
}