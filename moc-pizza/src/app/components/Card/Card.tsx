import React from 'react';
import Image from 'next/image';
import './Card.css';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, price }) => {
  const fallbackSrc = '/img/pizza-vertical.jpg';
  return (
    <div className="card card-vertical">
      <Image
        src={imageUrl}
        alt={title}
        className="card-image-vertical"
        width={220}
        height={260}
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackSrc;
        }}
        onLoadingComplete={(img) => {
          if (img.naturalWidth === 0) {
            img.src = fallbackSrc;
          }
        }}
        unoptimized
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">R$ {price.toFixed(2)}</p>}
      </div>
    </div>
  );
};

export default Card;