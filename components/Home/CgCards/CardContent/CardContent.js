import { Link } from "react-router-dom";
import "./CardContent.css";

export default function CardContent(props) {
  return (
    <>
      <Link to="/pcategories/biography">
        <div className="cg-card mx-2 px-3 py-2 h-20 position-relative cursor-pointer border">
          <div>
            <p>{props.title}</p>
          </div>

          <div>
            <img
            loading='lazy'
            className="position-absolute"
            onDragStart={(e) => {
              e.preventDefault();
              return false;
            }}
            src={props.image}
            alt={props.title}
          />
          </div>
          
        </div>
      </Link>
    </>
  );
}
