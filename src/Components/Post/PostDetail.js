import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [data, setData] = useState([]);


///Fetching the comments api
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);

  const params = useParams();
 
  //Display the detail of clicked item with respect to id
  const user = data.find((user) => user.id.toString() === params.postID);

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "8rem" }}
    >
      <div
        className="card col-4 bg-transparent text-light"
        style={{ backdropFilter: "blur(10px)", padding: "2rem" }}
      >
        <h1 className="border-bottom text-center">Details</h1>

        {user && (
          <div>
            <h4>{user.name}</h4>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b className="text-start">Comments : </b>
              <br />
              {user.body}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
