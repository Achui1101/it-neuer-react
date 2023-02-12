import PortfolioCard from "../components/PortfolioCard";
import "./style.css"
import pazza from "../media/images/pazza.png";
import lf from "../media/images/lf.png";
import eco from "../media/images/eco.png";
import nina from "../media/images/nina.png";

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>

            <div className="portfolio">
                <PortfolioCard
                    link="https://www.pazzaitaliankitchen.de/"
                    image={pazza}
                    title="Pazza italian kitchen"
                    description="Pazza italian kitchen ist ein Restaurant auf der Rü in Essen. Hier habe ich die Website für das Restaurant erstellt."
                />
                <PortfolioCard
                    link="https://www.pizzerialafiamma.de/"
                    image={lf}
                    title="La Fiamma Essen"
                    description="La Fiamma ist ein Restaurant in Essen. Hier habe ich die Website und die Shops für das Restaurant erstellt."
                />
                <PortfolioCard
                    link="https://www.pazzaitaliankitchen.de/"
                    image={eco}
                    title="ECO Greentop"
                    description="Eco Greentop ist eine Firma, die sich auf die Verlegung von Dachbegrünungen spezialisiert hat. Hier habe ich die Website, das Logo und die CI für das Unternehmen erstellt."
                />
                                <PortfolioCard
                    link="https://www.pazzaitaliankitchen.de/"
                    image={nina}
                    title="Nina Empacher"
                    description="Nina Empacher ist eine Braut-Stylistin aus Essen. Hier habe ich die Website für das Unternehmen erstellt"
                />
            </div>
        </div>
    );
}
export default Portfolio;