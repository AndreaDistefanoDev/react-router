import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="img-banner p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <p className="">BENVENUTO NELLO SHOP!</p>
        <button className="btn btn-dark btn-lg" type="button">
          <Link to="/products" className="text-decoration-none text-white">
            Scopri i nostri prodotti
          </Link>
        </button>
      </div>
    </div>
  );
}
