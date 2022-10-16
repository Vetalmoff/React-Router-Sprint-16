import { useParams } from "react-router-dom";
import arrayOfUsers from '../usersArr'

const User = () => {
    const { id } = useParams();
    const user = arrayOfUsers.find(item => { return item.id == id } )
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">This is {user.name} profile</h5>
                <h6 className="card-subtitle mb-2 text-muted">Age: {user.age}</h6>
                <p className="card-text">I live in {user.city}</p>
                </div>
            </div>
        </div>
    )

}

export default User
