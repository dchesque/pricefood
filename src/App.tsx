import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';

// Placeholder components for routes
const Insumos = () => <div className="p-6">Insumos em construção...</div>;
const Produtos = () => <div className="p-6">Produtos em construção...</div>;
const Estoque = () => <div className="p-6">Estoque em construção...</div>;
const Relatorios = () => <div className="p-6">Relatórios em construção...</div>;
const Configuracoes = () => <div className="p-6">Configurações em construção...</div>;

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/insumos" element={<Insumos />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;