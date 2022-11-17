import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import getRoleMasterData from "../../services/role/roleMasterData";

export default function AssignRoleEdit(props) {
  const { user, onSubmitEdit, onClose } = props;

  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState();

  const changeRole = (e) => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if (role === "") {
      alert("Please fill the role.");
      return false;
    }
    const roleData = JSON.parse(role);

    const data = {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,
      role: {
        id:roleData.id,
        name: roleData.name,
      },
    };
    onSubmitEdit(data);
  };

  useEffect(() => {
    setRoles(getRoleMasterData);
    setRole(JSON.stringify(user.role));
  }, [user.role]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Update Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username : </Form.Label>
            <span> {user.name}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={role}
              onChange={changeRole}
              required
            >
              {" "}
              <option>Plese Select a role</option>
              {roles.map((item, index) => (
                <option value={JSON.stringify(item)} key={index} required>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          // type="button"
          onClick={onClose}
          className="btn btn-danger"
        >
          Cancel
        </button>
        <button
          // type="button"
          onClick={submitRole}
          className="btn btn-success"
        >
          Save Change
        </button>
      </Modal.Footer>
    </>
  );
}
