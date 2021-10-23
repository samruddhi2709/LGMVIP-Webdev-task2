import React from "react";
// eslint-disable-next-line
import { useState } from "react";
import Cards from "./Components/user";
//import Footer from "./components/footer";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1 (api)
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="wholecontainer">
      
        {/*creating get users button*/}
        <div class="topnav" id="myTopnav">
        <h4 class="logo">Zippy</h4>
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
        </div>

        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="img">
                <img src="no data.jfif" width="400px" height="350px"></img>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
