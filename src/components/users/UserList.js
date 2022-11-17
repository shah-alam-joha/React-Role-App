import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import getUserData from "../../services/users/userData";
import AssignRole from "./AssignRole";
import AssignRoleEdit from "./AssignRoleEdit";

export default function UserList() {
  const [users, setUsers] = useState({
    userDataAll: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseEditModal = () => setShowEditModal(false);
  // eslint-disable-next-line no-unused-vars
  const handleEditModal = () => setShowEditModal(true);

  useEffect(() => {
    let userData = { ...users };
    userData.userDataAll = getUserData();
    setUsers(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUsers]);

  const editUser = (item) => {
    setEditData(item);
    setShowEditModal(true);
  };

  const deleteItem = (index) => {
    const userData = { ...users };
    console.log("userData", userData.userDataAll);
    userData.userDataAll.splice(index, 1);
    console.log("userData", userData.userDataAll);

    setUsers(userData);
  };

  const onSubmitAssignRole = (data) => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      if (userData.userDataAll[index].id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    setShowModal(false);
    alert("Congrates ! Your role has been assigned successfully.");
  };

  const onSubmitAssignRoleEdit = (data) => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      const item = userData.userDataAll[index];
      if (item.id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    handleCloseEditModal();
    alert("Your role is updated successfully.");
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2>User List</h2>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success float-right"
            onClick={handleShowModal}
          >
            + Assign Role
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.userDataAll.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.role ? item.role.name : "--"}</td>
              <td>
                <button
                  type="button"
                  style={{ width: 60, height: 40, marginRight: 10 }}
                  className="btn btn-success"
                  onClick={() => editUser(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  style={{ width: 70, height: 40 }}
                  className="btn btn-danger"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.userDataAll.length === 0 && (
            <tr>
              <td colSpan={5} className="text-danger text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
        <AssignRoleEdit
          onSubmitEdit={onSubmitAssignRoleEdit}
          onClose={handleCloseEditModal}
          user={editData}
        />
      </Modal>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <AssignRole onSubmit={onSubmitAssignRole} onClose={handleCloseModal} />
      </Modal>
    </>
  );
}
