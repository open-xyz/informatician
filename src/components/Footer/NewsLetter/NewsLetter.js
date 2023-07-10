import "./NewsLetter.css";
import { toast } from "react-toastify";

export default function NewsLetter() {
    const handleClick = async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("subscriber-email");
        const email = emailInput.value;
        const fetchConfig = {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ email }),
        };
        const toastConfig = {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored'
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/addUser",
                fetchConfig
            );
            if (response.status === 200)
                toast.success("Subscribed", toastConfig)
        } catch (error) {
            console.error(error);
            toast.error("There was a problem with server, Please try again!", toastConfig)
        }
    };
    return (
        <div className="newsletter-container">
            <div className="header">Subscribe To NewsLetter</div>
            <div className="info">
                <input type="email" id="subscriber-email" className="input-field" placeholder="Email ID" />
                <button onClick={handleClick} className="subscribe-button" >
                    Subscribe
                </button>
            </div>
        </div>
    );
}