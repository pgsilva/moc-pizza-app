"use client";

import React from 'react';
import HorizontalCardList from './components/HorizontalCardList/HorizontalCardList';
import HorizontalRankedList from './components/HorizontalRankedList/HorizontalRankedList';

const App = () => {
  // Dados de exemplo para o seu menu de pizzas
  const pizzasDoDia = [
    {
      id: 'p1',
      name: 'Margherita',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Molho de tomate, mussarela e manjericão fresco.',
      price: 45.00,
      badgeLabel: 'novidade',
    },
    {
      id: 'p2',
      name: 'Calabresa',
      image: 'https://via.placeholder.com/200x120/DAA520/FFFFFF?text=Calabresa',
      description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
      price: 48.50,
    },
    {
      id: 'p3',
      name: 'Frango c/ Catupiry',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Molho de tomate, mussarela, frango desfiado e catupiry.',
      price: 52.00,
      badgeLabel: 'novidade',
    },
    {
      id: 'p4',
      name: 'Portuguesa',
      image: 'https://via.placeholder.com/200x120/8B4513/FFFFFF?text=Portuguesa',
      description: 'Molho de tomate, mussarela, presunto, ovos, cebola e azeitona.',
      price: 50.00,
    },
    {
      id: 'p5',
      name: 'Quatro Queijos',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Mussarela, provolone, parmesão e gorgonzola.',
      price: 55.00,
    },
    // Adicione mais pizzas conforme necessário
  ];

  const promocoes = [
    {
      id: 'pr1',
      name: 'Combo Família',
      image: 'https://via.placeholder.com/200x120/FFD700/000000?text=Combo+Familia',
      description: '1 pizza grande + 1 refri 2L.',
      price: 70.00,
      badgeLabel: '20% Off',
    },
    {
      id: 'pr2',
      name: 'Borda Recheada Grátis',
      image: 'https://via.placeholder.com/200x120/FFA07A/000000?text=Borda+Gratis',
      description: 'Promoção válida para qualquer pizza grande.',
      price: 0.00, // Preço da borda em si, ou pode ser um item com desconto
    },
  ];

  const topPizzasSemana = [
    {
      id: 'tp1',
      name: 'Quatro Queijos',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Mussarela, provolone, parmesão e gorgonzola.',
      price: 55.00,
      badgeLabel: 'novidade',
    },
    {
      id: 'tp2',
      name: 'Portuguesa',
      image: 'https://via.placeholder.com/200x120/8B4513/FFFFFF?text=Portuguesa',
      description: 'Molho de tomate, mussarela, presunto, ovos, cebola e azeitona.',
      price: 50.00,
    },
    {
      id: 'tp3',
      name: 'Frango c/ Catupiry',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Molho de tomate, mussarela, frango desfiado e catupiry.',
      price: 52.00,
    },
    {
      id: 'tp4',
      name: 'Calabresa',
      image: 'https://via.placeholder.com/200x120/DAA520/FFFFFF?text=Calabresa',
      description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
      price: 48.50,
    },
    {
      id: 'tp5',
      name: 'Margherita',
      image: 'https://avatars.githubusercontent.com/u/31107814?v=4',
      description: 'Molho de tomate, mussarela e manjericão fresco.',
      price: 45.00,
    },
  ];

  return (
    <div className="app-container">
      <header className="banner-header">
        <div className="banner-bg">
          <img src="/img/banner-pizza.jpg" alt="Banner Pizza" className="banner-image" />
        </div>
        <div className="banner-content">
          <h1 className="banner-title">MOC Pizza!</h1>
          <p className="banner-subtitle">A melhor experiência de pizzaria, agora no seu bolso.</p>
          <p className="banner-desc">Peça online, aproveite promoções exclusivas e descubra sabores irresistíveis.</p>
        </div>
      </header>
      <HorizontalCardList title="Nossas Pizzas" items={pizzasDoDia} />
      <HorizontalRankedList title="Top 5" items={topPizzasSemana} />
      <HorizontalCardList title="Promoções Imperdíveis" items={promocoes} />
      <style jsx global>{`
        body {
          background-color: #1a1a1a;
          font-family: Arial, sans-serif;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default App;