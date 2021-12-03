import imagen from "../assets/imagenhome.jpg";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
      <img className="img-home" src={imagen} alt="Jovenes estudiando" />
    </div>
  );
};
export default Home;
