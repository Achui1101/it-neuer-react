import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header">
            <div className="image-box">
                <img className="image-box-img" src={props.image} />
            </div>
            <div className="text-box">
                <h2>
                   {props.title} 
                </h2>
                <p>
                    {props.text}
                </p>
                <div className="cta">
                    <Link className="btn-pri" to="/about">Mehr erfahren</Link>
                </div>
            </div>
            
        </div>
    );
}
export default Header;
