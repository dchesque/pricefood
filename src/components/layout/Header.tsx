import React from 'react';
import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b h-16 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Bem-vindo ao PreciFood</h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">Usuário</span>
        </div>
      </div>
    </header>
  );
}