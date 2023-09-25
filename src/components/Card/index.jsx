import React from 'react';
import './card.css';

const Card = ({ image, title, price }) => {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title} />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <h4 className="card-price">{price}</h4>
            </div>
        </div>
    );
}

export default Card;

//Asi se llama el componente
{/* <Card
    image="https://http2.mlstatic.com/D_Q_NP_2X_819710-MLA51839566017_102022-T.webp"
    title="Producto de muestra"
    price="$99.99"
/> */}