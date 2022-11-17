import Sidebar from "../../components/partials/Sidebar";
import RoleList from "../../components/role/RoleList";

export default function RoleContainer() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
          <Sidebar />
          </div>
          <div className="col-9 mt-3">
        <RoleList />
          </div>
        </div>
      </div>
    </div>
  );
}
