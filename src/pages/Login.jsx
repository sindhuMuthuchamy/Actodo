
import { Link } from "react-router-dom";
import { ImSmile } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const { users, setUsers } = props;
    const [Euser, setEuser] = useState("");
    const [Epassword, setEpassword] = useState("");
    const [Ruser, setRuser] = useState(true); 
    const navigate = useNavigate();

    const handleUserChange = (event) => {
        setEuser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setEpassword(event.target.value);
    };

    const handleLogin = () => {
         
        let userFound = false;

        users.forEach(item => { 
            if (item.username === Euser && item.password === Epassword) {
                console.log("Login Successful");
                userFound = true;
                navigate("/landing",{state:{user:Euser}});
            }
        });

        if (!userFound) {
            console.log("Login Failed");
            setRuser(false); 
        }
    };

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey, Hi👋🏼</h1>

                {Ruser ? (
                    <p className="flex items-center gap-1">
                        I help you manage your activities after you log in{" "} 😊
                        {/* <ImSmile className="bg-yellow-400 border rounded-lg" /> */}
                    </p>
                ) : (
                    <p className="text-red-700">Please Sign Up Before you Login!</p>
                )}

                <div className="flex flex-col gap-3 my-2">
                    <input
                        type="text"
                        className="w-52 p-1 border border-black rounded-md bg-transparent"
                        placeholder="Username"
                        value={Euser}
                        onChange={handleUserChange}
                    />

                    <input
                        type="password"
                        className="w-52 p-1 border border-black rounded-md bg-transparent"
                        placeholder="Password"
                        value={Epassword}
                        onChange={handlePasswordChange}
                    />

                    <button
                        onClick={handleLogin}
                        className="bg-[#8272DA] w-24 p-1 rounded-md"
                        disabled={!Euser || !Epassword} 
                    >
                        Login
                    </button>

                    <p>
                        Don't have an account?{" "}
                        <Link className="underline text-blue-900" to="/signup">
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
