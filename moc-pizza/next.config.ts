import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public', // Onde o Service Worker será gerado
  disable: process.env.NODE_ENV === 'development', // Desabilita PWA em modo de desenvolvimento para facilitar o debug
  register: true, // Registra o Service Worker
  skipWaiting: true, // Força a nova versão do Service Worker a assumir o controle mais rápido
});

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
