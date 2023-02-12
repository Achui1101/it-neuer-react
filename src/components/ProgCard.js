import "./ProgCard.css"

const ProgCard = (props) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.image} alt="Avatar" className="card-img"/>
            </div>
            <progress className="card-progress" value={props.progress} max="100"></progress>
        </div>
    );
}
export default ProgCard;