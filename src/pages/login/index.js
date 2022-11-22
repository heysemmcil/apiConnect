import React, { useState } from "react";
import {connect} from "react-redux"

import useApi from "../../hooks/useApi";

const Login = (props) => {
  console.log(">>LOGIN PROPS",props);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const api = useApi() 
  
  const btnLoginOnclick = () =>{
    //alert(email + ' ' + password)
    const postData = {email,password}
    console.log(">>>>POSTDATA",postData);
    api.post('auth/login', postData)
    .then((result) => {

      props.dispatch({
        type: "set_token",
        payload: {
          token: result.data.data.token,
        },
      })
      
    }).catch((err) => {
      alert("Please Try Again!")
    });
  } 

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h3>Please Login Your Account</h3>
        <br />
        <br />
        <form >
          <div className="row">
            <div className="col-md-12 mb-3">
              <label>E-mail Address</label>
              <input
                type="Email"
                className="form-control"
                placeholder="E-mail"
                defaultValue=""
                onChange={event => setEmail(event.target.value)}
              />
            </div>
           
            <div className="col-md-12 mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Pasword"
                defaultValue=""
                onChange={event => setPassword(event.target.value)}

              />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-block" type="button" onClick={btnLoginOnclick}>
                LOGIN
              </button>
            </div>
          </div>
        </form>
        <br />
            <br />
            <br />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Login)
