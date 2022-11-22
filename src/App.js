import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Category from "./pages/category";
import useApi from "./hooks/useApi";

import { HashRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";


function App(props) {
  console.log(">>>APP PROPS", props);
  const api = useApi() 

  if (props.authState.token && !props.appDataState.user){
    api.get('user/appData')
    .then((result) => {
      console.log(result);

      props.dispatch({
        type:"set_app_data",
        payload: {
          user:result.data.data.user
        }
      })

    }).catch((err) => {
      console.log(err);
    });
  }
    return (
      <div className="container py-3">
        <Header />

        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="category/:slug" element={<Category />} />
          </Routes>
        </HashRouter>

        <Footer />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
