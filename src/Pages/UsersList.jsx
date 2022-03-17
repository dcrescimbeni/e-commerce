import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/UsersList.module.css";

const UsersList = () => {
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    axios
      .get("/api/users/all")
      .then((res) => res.data)
      .then((users) => setUsersList(users));
  }, []);

  if (!usersList) return <div></div>;

  console.log(usersList);

  const handleDelete = (e, userId) => {
    e.preventDefault();
    axios.delete(`/api/users/delete/${userId}`).then(() => {
      const newUsersList = usersList.filter(
        (user) => user.userId !== userId
      );
      setUsersList(newUsersList);
    });
  };

  return (
    <div className="container-fluid px-4">
      <div className="row my-5">
        <h3 className="fs-4 mb-3">Users</h3>
        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width="50">
                  #
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody className={styles.tbodyContainer}>
              {usersList.map((user) => {
                return (
                  <tr className={styles.userContainer}>
                    <th scope="row">{user.userId}</th>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`/users/${user.userId}`}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(e, user.userId)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
