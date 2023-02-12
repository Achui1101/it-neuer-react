import "./PortfolioCard.css"

const PortfolioCard = (props) =>{    
    return (
        <div className="portfolio-card" href={props.link}>
            <div className="cardPF">
                <div className="portfolio-image">
                    <img className="portfolio-image" src={props.image} />
                </div>
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
} 
export default PortfolioCard;