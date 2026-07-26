import { useNavigate, Link } from "react-router-dom";


const Error404 = () => {
    return ( 
    <div className="error-page">
        <figure>
	        <div className="sad-mac"></div>
                <figcaption>
                    <span className="sr-text">Error 404: Not Found</span>
                    <span className="e"></span>
                    <span className="r"></span>
                    <span className="r"></span>
                    <span className="o"></span>
                    <span className="r"></span>
                    <span className="_4"></span>
                    <span className="_0"></span>
                    <span className="_4"></span>
                    <span className="n"></span>
                    <span className="o"></span>
                    <span className="t"></span>
                    <span className="f"></span>
                    <span className="o"></span>
                    <span className="u"></span>
                    <span className="n"></span>
                    <span className="d"></span>
                </figcaption>
        </figure>
        <p className="error-message">
            Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/login" className="error-home-btn">
            ← Return Home
        </Link>
    </div>
        
     );
}
 
export default Error404;