import Header from "../components/Header";
import Meta from "../components/Meta";
import GameCanvas from "../components/GameCanvas";

const Home = () => {
  // page content
  const pageTitle = "Home";
  const pageDescription = "welcome to react bootstrap template";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <GameCanvas />
    </div>
  );
};

export default Home;
