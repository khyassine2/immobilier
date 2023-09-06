import React,{useState} from 'react';
import './login.css';
import { useLocation } from 'react-router';

function Login() {
    const [users, setuser] = useState([{login:"oui",md:"oui"},{login:"yes",md:"yes"}]);
    const [errorMessages, setErrorMessages] = useState({});
    const [sendM, setSend] = useState();
  const test = (e) => {
        e.preventDefault();
    
        var { email, pass } = document.forms[0];
        const userData = users.find((user) => user.login === 
        email.value);
        if (userData) {
        if (userData.md !== pass.value) {
            setErrorMessages("your email or password incorrect");
            setSend(false);
        } else {
            setSend(true);
            window.location.pathname="/admin/annonces"
            setErrorMessages("");
            
        }
        } else {
            setErrorMessages("your email or password incorrect");
            setSend(false);

        }
        };


  return(
    <>
        <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form"  onSubmit={test}>
                            <span className="login100-form-title p-b-26" id="fo">
                                Welcome
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">

                                <input className="input100" type="text" name="email" placeholder="email" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input className="input100" type="password" name="pass" placeholder="password"/>
                                
                            </div>
                              <span id="msge"> { sendM==false && errorMessages}</span>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <input type="submit"  value="Login" className="login100-form-btn" id="fo" />
                                        
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            </>

  )
}

export default Login;