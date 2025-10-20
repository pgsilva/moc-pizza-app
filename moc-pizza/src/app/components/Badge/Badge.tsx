import React from 'react';
import './Badge.css';

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => (
  <span className="item-badge">{label}</span>
);

export default Badge;
