import Sidebar from "../../components/partials/Sidebar";
import UserList from "../../components/users/UserList";

export default function UserContainer() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
          <Sidebar />
          </div>
          <div className="col-9 mt-3">
           <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}
