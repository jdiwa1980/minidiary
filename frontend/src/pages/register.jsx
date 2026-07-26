import { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import { CiUser, CiMail } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { register } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const formRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");
        setIsLoading(true);
  
        //2. pass the form element reference to FormData
        const formData = new FormData(formRef.current);

        // 3. Convert the data into a clean JavaScript object
        const formValues = Object.fromEntries(formData.entries());

        // formValues hold the final json object to compare w/ jwt
        try {
            const response = await register(formValues);
            console.log(response.data);

            setSuccess("Account created successfully")

            setTimeout(() => {
                navigate("/login")
            }, 2000);

            formData = null
            
        } catch (err) {
            console.error(err.response)
            setError(err.response?.data?.message)
        } finally {
            setIsLoading(false);
        }
    }

    return ( 
        <div className="formActions-container">
            <form onSubmit={handleSubmit} className="login-form" ref={formRef}>
                <div className="flex-row header">
                        <SiGitbook  size={25}/>
                    <h2>Register to minidiary</h2>
                </div>
                <div className="flex-row">
                    <label htmlFor="username" className="lf--label">
                        <i>
                            <CiUser />
                        </i>
                    </label>
                        {/* CRITICAL: Every input MUST have a 'name' attribute */}
                        <input type="text"
                                id="username"
                                className="lf--input"
                                placeholder="username"
                                required
                                autoComplete="off"
                                name="username"
                        />
                </div>
                <div className="flex-row">
                    <label htmlFor="email" className="lf--label">
                        <i>
                            <CiMail />
                        </i>
                    </label>
                        {/* CRITICAL: Every input MUST have a 'name' attribute */}
                        <input type="text"
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
                        {loading ? "Sending..." : "Submit"}
                    </button>
                    
                    <div className="flex-button">
                        {error && <span className="error">{error}</span>}
                        {success && <span className="error">{success}</span>}
                        <Link to="/login" className="register">
                                {" "}Login
                            </Link>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Register;