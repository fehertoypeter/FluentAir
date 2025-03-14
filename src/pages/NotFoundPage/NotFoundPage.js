import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate(); // A hook itt van, nem a Navigate komponenst használjuk

  const handleClick = () => {
    navigate("/"); // Itt történik a navigálás
  };

  return (
    <div className="not-found-container">
      <p className="not-found-text">404 - Page not found</p>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
