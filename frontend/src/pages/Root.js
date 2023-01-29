import React from "react";
import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const Root = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigiation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
