import React, { useState } from 'react';
import Image from 'next/image';
import './Card.css';
import Badge from '../Badge/Badge';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps & { badgeLabel?: string }> = ({ title, imageUrl, description, price, badgeLabel }) => {
  const fallbackSrc = '/img/pizza-vertical.jpg';
  const [loading, setLoading] = useState(true);

  return (
    <div className="card card-vertical" style={{ position: 'relative' }}>
      {badgeLabel && <Badge label={badgeLabel} />}
      <div className="card-image-wrapper">
        {loading && <div className="shimmer" />}
        <Image
          src={imageUrl}
          alt={title}
          className="card-image-vertical"
          width={220}
          height={260}
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackSrc;
          }}
          onLoadingComplete={() => setLoading(false)}
          unoptimized
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">R$ {price.toFixed(2)}</p>}
      </div>
    </div>
  );
};

export default Card;