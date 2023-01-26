import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

const Post = () => {
  
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });


  //Function to set start and end value of page
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  //Fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setUserData(res.data));
    }; 
    fetchData();
  }, []);


  //Function to filter the data that are  fetched from api
  const filteredData = userData.filter((user) => {
    if (searchUser === "") {
      return user;
    } else {
      return user.title.toLowerCase().includes(searchUser);
    }

  });

  //To sort the data alphabetically
  const sortUser = () => {
    let sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    setUserData(sortedData);
  };

 

  return (
    <>
      <div className="text-end">
        <input
          className="input-form col-5"
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearchUser(e.target.value)}
          value={searchUser}
        />
        <button className="btn btn-success m-2" onClick={sortUser}>
          Sort by name
        </button>
      </div>
      <div>
        <div className="row" style={{ paddingLeft: "9rem" }}>
          {filteredData.length === 0 && (
            <div className="text-dark bg-light col-10 mb-3 ">
              <h4 className="text-center m-4">
                <i>No users found...</i>
              </h4>
            </div>
          )}
          {filteredData.slice(pagination.start, pagination.end).map((user) => (
            <div key={user.id} className="col-md-3 m-4">
              <div className="card">
                <div className="card-body" style={{ height: "9.3rem" }}>
                  <p>{user.title}</p>

                  <NavLink
                    to={`/post/${user.id}`}
                    className="btn bg-success text-light"
                  >
                    Check details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={filteredData.length}
        />
      </div>
    </>
  );
};

export default Post;
