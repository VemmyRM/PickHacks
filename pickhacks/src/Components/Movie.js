const Movie = ({ name, image }) => {
  return (
    <div>
      <h1 style={{ padding: "30px" }}>{name}</h1>
      <img style={{ height: "900px", paddingTop: "20px" }} src={image} />
    </div>
  );
};

export default Movie;
