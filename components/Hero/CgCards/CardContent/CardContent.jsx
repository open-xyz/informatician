import Image from "next/image";
import "./CardContent.css";
import Link from "next/link";

export default function CardContent(props) {
  return (
    <>
      <Link to="/pcategories/biography">
        <div className="cg-card mx-2 px-3 py-2 h-20 position-relative cursor-pointer">
          <p>{props.title}</p>
          <Image
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
      </Link>
    </>
  );
}
