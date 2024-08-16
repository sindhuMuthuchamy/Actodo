import { Link } from "react-router-dom";
import { ImSmile } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const { users, setUsers } = props;

    const [Euser, setEuser] = useState("");
    const [Epassword, setEpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleUserChange = (event) => {
        setEuser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setEpassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSignup = () => {
        if (Epassword !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        const userExists = users.some(item => item.username === Euser);
        if (userExists) {
            setErrorMessage("Username already exists");
            return;
        }

        setUsers(prevUsers => [
            ...prevUsers,
            { username: Euser, password: Epassword }
        ]);
        navigate("/");
    };

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey, Hi👋🏼</h1>
                <p className="flex items-center gap-2">
                    Sign-up Here 😊
                    {/* <ImSmile className="bg-yellow-400 border rounded-lg" /> */}
                </p>

                {errorMessage && <p className="text-red-700">{errorMessage}</p>}

                <div className="flex flex-col gap-3 my-2">
                    <input
                        type="text"
                        value={Euser}
                        className="w-52 p-1 border border-black rounded-md bg-transparent"
                        placeholder="Username"
                        onChange={handleUserChange}
                    />

                    <input
                        type="password"
                        value={Epassword}
                        className="w-52 p-1 border border-black rounded-md bg-transparent"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />

                    <input
                        type="password"
                        value={confirmPassword}
                        className="w-52 p-1 border border-black rounded-md bg-transparent"
                        placeholder="Confirm password"
                        onChange={handleConfirmPasswordChange}
                    />

                    <button
                        className="bg-[#FCA201] w-24 p-1 rounded-md"
                        onClick={handleSignup}
                        disabled={!Euser || !Epassword || !confirmPassword}
                    >
                        Sign-up
                    </button>

                    <p>
                        Already have an account?{" "}
                        <Link className="underline text-blue-900" to="/">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
