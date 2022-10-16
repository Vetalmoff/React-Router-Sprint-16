import arrayOfUsers from '../usersArr';
import { Link, Outlet } from "react-router-dom";

const Users = () => {
    return (
        <div style={{ display: "flex" }}>
            <nav
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}
            >
            {arrayOfUsers.map((user) => (
                <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/users/${user.id}`}
                key={user.id}
                >
                {user.name}
                </Link>
            ))}
            </nav>
            <Outlet />
        </div>
    )

}

export default Users
