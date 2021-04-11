const Movie = ({ name, image }) => {
  return (
    <div>
      <center><h1 style={{ paddingBottom: "20px", fontSize: "50px" }}>{name}</h1>
        <img style={{ height: "550px", paddingTop: "20px", marginBottom: "100px" }} src={image} /></center>
    </div>
  );
};

export default Movie;
