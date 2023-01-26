import React,{useEffect, useState} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/Post/PostDetail";
import NavBar from './Components/NavBar/NavBar';

function App() {
  const { pathname } = useLocation();
 

  return (
    <>
      {pathname !== "/" && <NavBar />}

      <Switch>
        <Route exact path="/post">
          <Post />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/post/:postID">
          <PostDetail />
        </Route>

        <Route path="*">
          <Post />
        </Route>
      </Switch>
    </>
  );
}

export default App;
