import React, {Component} from 'react';
import GoogleLogin from "react-google-login";

class landingPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
        <div class="form-field">
        <a href="http://www.tothenew.com/" class="login-bg">  </a>
       {/* <a href=""class="btn btn-submit"> Login with TO THE NEW </a> */}
       <GoogleLogin
        clientId="305195431701-rnsdu77n2ulnjodd5v8o1siq9r1rc0lk.apps.googleusercontent.com"
        buttonText="Login with TO THE NEW"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"none"}
        className={"btn"}
        icon={false}
        // style={{    background: "#008080",
        //   minWidth: "300px",
        //   padding: "20px",
        //   color: "#fff",}}
      />
    </div>
        </div>
      </div>
    );
  }
}

export default landingPage;
