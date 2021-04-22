import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  return (
    <main>
      <Info></Info>
      <User></User>
      <Repos></Repos>
      {
        // <Navbar></Navbar>
        // <Search></Search>
      }
    </main>
  );
};

export default Dashboard;
