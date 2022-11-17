import { useEffect, useState } from "react";
import getPermissionMasterData from "../../services/permissions/permissionMasterData";

export default function PermissionList() {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    setPermissions(getPermissionMasterData);
  }, []);

  return (
    <>
      <h2>Permissions Lists</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  type="button"
                  style={{ width: 60, height: 40, marginRight: 10 }}
                  className="btn btn-success"
                >
                  Edit
                </button>
                <button
                  type="button"
                  style={{ width: 70, height: 40 }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
