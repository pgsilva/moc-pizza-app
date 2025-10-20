import React from 'react';
import Card from '../Card/Card';
import './HorizontalCardList.css';


const HorizontalCardList: React.FC<HorizontalCardListProps> = ({ title, items }) => {
  return (
    <div className="horizontal-list-container">
      {title && <h2 className="list-title">{title}</h2>}
      <div className="horizontal-list-scroll">
        <div className="horizontal-list">
          {items.map((item) => (
            <Card
              key={item.id} 
              title={item.name}
              imageUrl={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardList;