import Link from "next/link"
export default function Users({users}) {
    return(
    <ul>
    {users.map(user => (
        <Link  key={user.id} href={`/users/${user.id}`}>
            <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between gap-x-5">
                <div>
                    <h3 className="font-bold">{user.id}. {user.first_name} {user.last_name} </h3>
                    <p>Email: {user.email}</p>
                </div>
                <img src={user.avatar} className="rounded-full w-16"/>
            </li>  
        </Link>
      
    ))}

</ul>
)};
