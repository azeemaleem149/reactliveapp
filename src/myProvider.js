import React, { useState } from "react";
import Helper from "./helper";
import secretContext, { taskData } from "./myContext";

const MyProvider = (props) => {
  let credentials = Helper(3);
  const [provideValues, setprovideValues] = useState({
    heading: "",
    date: "",
    status: "",
  });

  return (
    <>
      <secretContext.Provider value={credentials}>
        <taskData.Provider value={{ provideValues, setprovideValues }}>
          {props.children}
        </taskData.Provider>
      </secretContext.Provider>
    </>
  );
};

export default MyProvider;
