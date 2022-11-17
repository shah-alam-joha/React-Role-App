import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import getRoleMasterData from "../../services/role/roleMasterData";
import getUserData from "../../services/users/userData";

export default function AssignRole(props) {

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [user, setUser] = useState();
  const [role, setRole] = useState();


  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const changeRole = (e) => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if(user === "" || role === ""){
      alert("Please fill all the values");
      return  false;
    }

    const userData = JSON.parse(user);
    const roleData = JSON.parse(role);
   
    const data = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      password: userData.password,
      role: {
        id: roleData.id,
        name: roleData.name,
      },
    };
   
    props.onSubmit(data);
  };

  useEffect(() => {
    setUsers(getUserData);
    setRoles(getRoleMasterData);
    // setRoles(JSON.stringify(user.role));
  }, []);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Assign Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>

            <Form.Select
              aria-label="Default select example"
              value={user}
              onChange={changeUser}
              required
            >
              <option>Plese Select a user</option>
              {users.map((item, index) => (
                <option value={JSON.stringify(item)} key={index} required>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={role}
              onChange={changeRole}
              required
            > <option>Plese Select a role</option>
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
          onClick={props.onClose}
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
