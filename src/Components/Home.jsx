import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice";
import { BounceLoader } from "react-spinners";

const Home = () => {
  const users = useSelector((state) => state.myUsersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users);

  return (
    <div className="container">
      <h2 className="users-list-heading">
        Users list {users.isLoading && <BounceLoader color="#36d7b7" />}
      </h2>
      <div className="users-list">
        {Array.isArray(users.myUsers) &&
          users.myUsers.map((user) => {
            return (
              <div className="user-list" key={user.id}>
                <h1 className="user-name">
                  <span>Name:</span> {user.name}
                </h1>
                <div className="user-details">
                  <p>
                    Company Name:
                    {" " + user.company.name}
                  </p>
                  <p>
                    <span className="user-email">Email: </span> {user.email}
                  </p>
                  <p>
                    <span className="user-phone">Phone: </span>{" "}
                    {user.phone.slice(0, 13)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
