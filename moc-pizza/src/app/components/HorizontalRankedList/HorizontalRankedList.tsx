import React from 'react';
import Card from '../Card/Card';
import './HorizontalRankedList.css';

interface RankedItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  badgeLabel?: string;
}

interface HorizontalRankedListProps {
  title?: string;
  items: RankedItem[];
}

const HorizontalRankedList: React.FC<HorizontalRankedListProps> = ({ title, items }) => {
  return (
    <div className="horizontal-list-container">
      {title && <h2 className="list-title">{title}</h2>}
      <div className="horizontal-list-scroll">
        <div className="horizontal-list">
          {items.map((item, idx) => (
            <div style={{ position: 'relative' }} key={item.id}>
              <span className="ranked-number">{idx + 1}</span>
              <Card
                title={item.name}
                imageUrl={item.image}
                description={item.description}
                price={item.price}
                badgeLabel={item.badgeLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalRankedList;
