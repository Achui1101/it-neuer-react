import axios from "axios"; // axios ist eine Bibliothek, die HTTP-Anfragen an einen Server sendet
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // prevent default form submit
        e.preventDefault();
        // send data to backend
        try {
            let res = await login({
                email,
                password
            }); // login ist eine Funktion aus auth.js in actions und sendet die Daten an den Server
            console.log("LOGIN ", res);
            toast.success("Login erfolgreich.", res);
            if(res.data){
                window.localStorage.setItem("auth", JSON.stringify(res.data)); // res.data enthält den Token und die Userdaten
                dispatch({  // dispatch ist eine Funktion aus react-redux, die die Daten an den Store sendet
                    type: "LOGGED_IN_USER",
                    payload: res.data
                });
                navigate("/download"); // navigate ist eine Funktion aus react-router-dom, die die Seite wechselt           
            }
            
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) toast.error(err.response.data + ". Bitte versuchen Sie es erneut.");
        }
    }



    return (
        <div className="text-center">
            <h1>Login</h1>
            <div className="container">
                <div className="row">
                    <LoginForm
                    handleSubmit={handleSubmit}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    ></LoginForm>
                </div>
            </div>
        </div>
    )
};
export default Login;