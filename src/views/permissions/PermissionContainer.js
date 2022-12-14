import Sidebar from "../../components/partials/Sidebar";
import PermissionList from "../../components/permissions/PermissionList";

export default function PermissionContainer() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
          <Sidebar />
          </div>
          <div className="col-9 mt-3">
         <PermissionList />
          </div>
        </div>
      </div>
    </div>
  );
}
