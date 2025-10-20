import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, price }) => {
  return (
    <div className="card card-vertical">
      <img src={imageUrl} alt={title} className="card-image-vertical" onError={(e) => {
        (e.target as HTMLImageElement).src = '/img/pizza-vertical.jpg';
      }} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">R$ {price.toFixed(2)}</p>}
      </div>
    </div>
  );
};

export default Card;