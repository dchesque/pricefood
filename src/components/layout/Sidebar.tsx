import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  BoxesIcon,
} from 'lucide-react';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/insumos', icon: Package, label: 'Insumos' },
  { path: '/produtos', icon: ShoppingCart, label: 'Produtos Finais' },
  { path: '/estoque', icon: BoxesIcon, label: 'Estoque' },
  { path: '/relatorios', icon: BarChart3, label: 'Relatórios' },
  { path: '/configuracoes', icon: Settings, label: 'Configurações' },
];

export function Sidebar() {
  return (
    <aside className="bg-emerald-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">PreciFood</h1>
        <p className="text-emerald-200 text-sm">Gestão Inteligente</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-700 text-white'
                  : 'text-emerald-100 hover:bg-emerald-700/50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}