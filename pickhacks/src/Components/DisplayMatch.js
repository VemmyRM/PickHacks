const DisplayMatch = ({match}) => {
    return (
      <div >
       <center> <h1 className="title3" >Congratulations - you've been matched! </h1>
        <h2 className="title2" style={{marginBottom:"4px"}}>Everybody in your party wants to watch these movies!</h2>
        <div className="container" >
        <div className="row" style={{paddingLeft: "150px"}}>
            { match[1].split(",").map(element => <div className="col-3 cards" >{element}</div>)}
       </div>
       </div>
        </center>
      </div>
    );
  };
  
  export default DisplayMatch;
  

  