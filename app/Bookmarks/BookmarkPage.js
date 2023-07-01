import CardContent from "../../components/Home/BkCards/CardContent/CardContent"
import ebk1 from "../../assets/ebooks/ebk1.webp";
import { useContext, useState } from "react";
import DataContext from "../../context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function BookmarkPage({ props }) {

    const { bookmarks, setBookmarks } = useContext(DataContext);

    const [color, setColor] = useState("aqua");
    const [visible, setVisible] = useState("");
    const [image, setImage] = useState(ebk1);

    const handleClick = () =>{
        const updatedBookmarks = bookmarks.filter(data => data.id !== bookmarks.id);
        setBookmarks(updatedBookmarks);
    }

    return (
        <>
            <h1 style={{ marginTop: 100, textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Bookmarks</h1>
            <div style={{ marginTop: 30, padding: 10, marginBottom: 150 }}>
                <div style={{ display: 'flex', height: 200, width: 200 }}>
                    {
                        bookmarks.map(bookmark => (
                            <div style={{ marginBottom: "24px", backgroundColor: color }}>
                                <div>
                                    <div className="book-box">
                                        <div className="thumbnail">
                                            <img loading='lazy' src={image} alt="No Bookmars Yet" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                    <div>
                        <FontAwesomeIcon
                            style={{ height: "24px", marginTop: 70, backgroundColor: color, cursor: 'pointer' }}
                            icon={faBookmark}
                            onClick={handleClick}
                            visibility={visible}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}