
const Options = ({phrase, handleClick}) => {
    return (
        <div className="option container" onClick={handleClick}>
            <h1>{phrase}</h1>
        </div>
     );
}
 
export default Options;