import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CardContent from "./CardContent/CardContent";
import ebk1 from "../../../assets/ebooks/ebk1.webp";
import ebk2 from "../../../assets/ebooks/ebk2.webp";
import ebk3 from "../../../assets/ebooks/ebk3.webp";
import ebk4 from "../../../assets/ebooks/ebk4.webp";
import ebk5 from "../../../assets/ebooks/ebk5.webp";
import ebk6 from "../../../assets/ebooks/ebk6.webp";
import abk1 from "../../../assets/audiobks/abk1.webp";
import abk2 from "../../../assets/audiobks/abk2.webp";
import abk3 from "../../../assets/audiobks/abk3.webp";
import abk4 from "../../../assets/audiobks/abk4.webp";

export default function CgCards(props) {
  return (
    <>
      <div className="container-xl mt-20 select-none" style={{padding: props.theme === "dark" ? "20px 12px" : "0 9px", marginBottom: "30px"}}>
        <h1 className="bk-head">Popular Categories</h1>
        <div className="d-flex">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
              1500: { items: 4 },
            }}
            disableButtonsControls
            autoPlay={true}
            autoPlayStrategy="default"
            animationDuration={1200}
            infinite={true}
            mouseTracking={true}
          >
            <CardContent image={ebk1} title="Biography & Memoir" />
            <CardContent image={abk1} title="Politics" />
            <CardContent image={abk2} title="Career & Growth" />
            <CardContent image={abk3} title="Contemporary Fiction" />
            <CardContent image={abk4} title="Science & Mathematics" />
            <CardContent image={ebk2} title="Cooking & Food" />
            <CardContent image={ebk3} title="Self-Improvment" />
            <CardContent image={ebk4} title="Travel" />
            <CardContent image={ebk5} title="Mystery, Thriller & Crime" />
            <CardContent image={ebk6} title="Home & Garden" />
          </AliceCarousel>
        </div>
      </div>
    </>
  );
}
