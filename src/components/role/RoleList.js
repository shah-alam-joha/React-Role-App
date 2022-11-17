import { useEffect, useState } from "react";
import getRolePermissionsData from "../../services/role/rolePermissionsData";

export default function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles(getRolePermissionsData);
  }, [setRoles]);

  return (
    <>
      <h2>Roles Lists</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Permissions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {
                item.permissions.map((permission, index2) => (
                   <span key={index2} className="badge badge-default text-black"> {permission.name} </span> 
              ))}
              </td>
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
