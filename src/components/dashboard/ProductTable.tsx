import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  cost: number;
  price: number;
  margin: number;
  stock: number;
  stockDays: number;
}

const products: Product[] = [
  {
    name: 'Pão Francês',
    category: 'Pães',
    cost: 0.25,
    price: 0.75,
    margin: 200,
    stock: 150,
    stockDays: 5
  },
  {
    name: 'Bolo de Chocolate',
    category: 'Bolos',
    cost: 15.00,
    price: 45.00,
    margin: 200,
    stock: 8,
    stockDays: 2
  },
  {
    name: 'Pão de Queijo',
    category: 'Pães',
    cost: 1.20,
    price: 3.50,
    margin: 191.67,
    stock: 45,
    stockDays: 4
  },
  {
    name: 'Croissant',
    category: 'Pães Especiais',
    cost: 2.50,
    price: 8.90,
    margin: 256,
    stock: 12,
    stockDays: 3
  }
];

export function ProductTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Produtos Mais Relevantes</h2>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
            Ver análise completa
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Custo</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Margem</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Estoque</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dias Rest.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.name} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {product.cost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${product.margin < 150 ? 'bg-red-100 text-red-800' : 
                      product.margin < 180 ? 'bg-orange-100 text-orange-800' : 
                      'bg-emerald-100 text-emerald-800'}`}>
                    {product.margin.toFixed(1)}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${product.stock <= 10 ? 'bg-red-100 text-red-800' : 
                      product.stock <= 30 ? 'bg-orange-100 text-orange-800' : 
                      'bg-emerald-100 text-emerald-800'}`}>
                    {product.stock} un
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${product.stockDays <= 2 ? 'bg-red-100 text-red-800' : 
                      product.stockDays <= 4 ? 'bg-orange-100 text-orange-800' : 
                      'bg-emerald-100 text-emerald-800'}`}>
                    {product.stockDays} dias
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}