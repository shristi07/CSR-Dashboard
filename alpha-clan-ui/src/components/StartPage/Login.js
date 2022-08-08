import React, {Component} from 'react';
import GoogleLogin from "react-google-login";
import { useDispatch } from 'react-redux';
import { getUserInfo, submitGloginData, updateUser } from '../../Actions/userActions';

const LandingPage =()=> {

  const dispatch= useDispatch();

  const handleLogin = async googleData => {
    console.log("entering");
     dispatch(submitGloginData(googleData.tokenId,()=>dispatch(getUserInfo())));
     
  }
    return (
      <div className="login-container">
        <div className="login-wrapper">
        <div class="form-field">
        <a href="http://www.tothenew.com/" class="login-bg">  </a>
       {/* <a href=""class="btn btn-submit"> Login with TO THE NEW </a> */}
       <GoogleLogin
        clientId="305195431701-rnsdu77n2ulnjodd5v8o1siq9r1rc0lk.apps.googleusercontent.com"
        buttonText=" Login with TO THE NEW"
        onSuccess={handleLogin}
        // onFailure={responseGoogle}
        cookiePolicy={"none"}
        className={"btn"}
        icon={false}
      />
    </div>
        </div>
      </div>
    );
}

export default LandingPage;
