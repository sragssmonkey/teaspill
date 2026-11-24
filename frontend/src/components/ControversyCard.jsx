
import "./ControversyCard.css";

function ControversyCard({ image, category, title, description, date }) {
    return (
        <article className="controversy-card">

            <div className="card-image">
                <img src={image} alt={title} />
            </div>

            <div className="card-content">

                <span className="card-category">
                    {category}
                </span>

                <h2>{title}</h2>

                <p>{description}</p>

                <div className="card-footer">
                    <span>{date}</span>
                    <span className="read-more">READ STORY ↗</span>
                </div>

            </div>

        </article>
    );
}

export default ControversyCard;
