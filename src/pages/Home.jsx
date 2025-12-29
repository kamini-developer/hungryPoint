import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-overlay">
        <h1>Hungry Point 🍔</h1>
        <p>Delicious food at the best price</p>

        <button
          className="home-btn"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
      </div>
    </section>
  );
}

export default Home;

