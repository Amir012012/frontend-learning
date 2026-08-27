import { Fragment } from "react";

const users = [
  {
    id: 1,
    name: "amir",
    age: 25,
    email: "karami@gmail.com",
  },
  {
    id: 2,
    name: "sara",
    age: 20,
    email: "sara@gmail.com",
  },
];
const UsersList = () => {
  return (
    <>
      {users.map((user) => (
        <Fragment key={user.id}>
          <div
            className="container"
            accordion
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "gray",

              flexDirection: "column",
            }}
          >
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.email}</h3>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default UsersList;
