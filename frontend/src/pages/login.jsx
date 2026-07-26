import { useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { SiGitbook } from "react-icons/si";
import { MdOutlineMailLock } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { login } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] =useState(false);

    const navigate = useNavigate();
    // 1. Create a single ref for the form element
    const formRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page reload
        setIsLoading(true);
        //2. pass the form element reference to FormData
        const formData = new FormData(formRef.current);
        

        // 3. Convert the data into a clean JavaScript object
        const formValues = Object.fromEntries(formData.entries());

        console.log(formValues.password);
        // formValues hold the final json object to compare w/ jwt
        try {
            const response = await login(formValues);
            console.log(response);

            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)

            navigate("/dashboard")

        } catch (err) {
            console.error(err.response);
            setError(err.response?.data?.message ||
                "Login failed." )
                } finally {
                setIsLoading(false);
        }

    }

    

    return ( 
        <>
            <div className="formActions-container">
                 {/* 1. Create a single ref for the form element */}
                <form onSubmit={handleSubmit} className="login-form" ref={formRef}>
                    <div className="flex-row header">
                        <SiGitbook  size={25}/>
                        <h2>minidiary login</h2>
                    </div>  
                    <div className="flex-row">
                        <label htmlFor="email" className="lf--label">
                            <i>
                                <MdOutlineMailLock />
                            </i>
                        </label>
                        {/* CRITICAL: Every input MUST have a 'name' attribute */}
                        <input type="email"
                                id="email"
                                className="lf--input"
                                placeholder="email"
                                required
                                autoComplete="off"
                                name="email"
                        />
                    </div>
                    <div className="flex-row">
                        <label htmlFor="password" className="lf--label">
                            <i>
                                <IoMdKey />
                            </i>
                        </label>
                        {/* CRITICAL: Every input MUST have a 'name' attribute */}
                        <input type={showPassword ? "text" : "password"}
                                id="password"
                                className="lf--input"
                                placeholder="password" 
                                required
                                autoComplete="off"
                                name="password"
                        />
                        <button type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}
                        </button>
                    </div>
                    <div className="flex-button">
                        <button className="lf--submit"
                                disabled={loading}
                        >
                            {loading ? "Loading..." : "Login"}

                        </button>
                        {/* <input type="submit" value="Login" className="lf--submit" /> */}
                    </div>
                    <div className="flex-button">
                        {error && <span className="error">{error}</span>}
                        <p>
                            Don't have an Account yet?
                            <Link to="/register" className="register">
                                {" "}Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Login;