import React from 'react';
import { 
  DollarSign, Percent, TrendingUp, AlertTriangle, ArrowUpRight,
  Calendar, MapPin, ChevronDown, Filter, TrendingDown,
  LineChart, Target, ArrowUp
} from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { AlertCard } from '../components/dashboard/AlertCard';
import { ProductTable } from '../components/dashboard/ProductTable';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho com Filtros */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Dashboard de Precificação</h1>
          <div className="flex items-center space-x-4">
            {/* Seletor de Período */}
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-500" />
              <select className="bg-transparent text-sm font-medium">
                <option>Hoje</option>
                <option>Últimos 7 dias</option>
                <option>Último mês</option>
                <option>Personalizado</option>
              </select>
            </div>
            {/* Seletor de Loja */}
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-gray-500" />
              <select className="bg-transparent text-sm font-medium">
                <option>Todas as Lojas</option>
                <option>Loja Centro</option>
                <option>Loja Shopping</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Margem Média */}
        <div className="bg-violet-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-violet-500 rounded-full">
              <Percent className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-1">Margem Média</h3>
          <div className="text-3xl font-bold mb-2">185%</div>
          <div className="flex items-center text-violet-200">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">15% vs. mês anterior</span>
          </div>
        </div>

        {/* Produtos com Margem Crítica */}
        <div className="bg-pink-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-pink-400 rounded-full">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-1">Margem Crítica</h3>
          <div className="text-3xl font-bold mb-2">8</div>
          <div className="flex items-center text-pink-200">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span className="text-sm">3 novos esta semana</span>
          </div>
        </div>

        {/* Markup Médio */}
        <div className="bg-emerald-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-400 rounded-full">
              <ArrowUp className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-1">Markup Médio</h3>
          <div className="text-3xl font-bold mb-2">2.85x</div>
          <div className="flex items-center text-emerald-200">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">0.2x vs. mês anterior</span>
          </div>
        </div>

        {/* Rentabilidade */}
        <div className="bg-blue-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-400 rounded-full">
              <Target className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-1">Rentabilidade</h3>
          <div className="text-3xl font-bold mb-2">65%</div>
          <div className="flex items-center text-blue-200">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">5% vs. mês anterior</span>
          </div>
        </div>
      </div>

      {/* Gráficos e Análises */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolução de Margens */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Evolução de Margens</h2>
            <div className="flex space-x-4">
              <button className="text-sm font-medium text-emerald-600">Visual</button>
              <button className="text-sm font-medium text-gray-400">Tabela</button>
            </div>
          </div>
          <div className="h-64">
            <div className="h-full flex items-end space-x-6">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((dia) => (
                <div key={dia} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-violet-500 rounded-t-lg"
                    style={{ 
                      height: `${Math.random() * 60 + 20}%`,
                      background: 'linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%)'
                    }}
                  ></div>
                  <span className="text-sm text-gray-600 mt-2">{dia}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distribuição de Margens */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Distribuição de Margens</h2>
          <div className="space-y-4">
            {[
              { range: 'Acima de 200%', count: 45, color: 'bg-emerald-500' },
              { range: '150% - 200%', count: 32, color: 'bg-emerald-400' },
              { range: '100% - 150%', count: 28, color: 'bg-yellow-500' },
              { range: '50% - 100%', count: 15, color: 'bg-orange-500' },
              { range: 'Abaixo de 50%', count: 8, color: 'bg-red-500' }
            ].map((item) => (
              <div key={item.range} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.range}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-100 rounded-full h-2 mr-3">
                    <div 
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${(item.count / 45) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{item.count} produtos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Análises Detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Análise de Custos */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Análise de Custos</h2>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
              Ver detalhes
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Custos Fixos', value: 'R$ 15.000,00', change: '+5%' },
              { name: 'Custos Variáveis', value: 'R$ 25.000,00', change: '-3%' },
              { name: 'Custo Médio por Produto', value: 'R$ 12,50', change: '+2%' },
              { name: 'Markup Sugerido', value: '2.8x', change: '0%' }
            ].map(item => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{item.name}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  <span className={`text-xs ${
                    item.change.startsWith('+') ? 'text-red-600' : 'text-emerald-600'
                  }`}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Produtos com Baixa Margem */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Produtos com Baixa Margem</h2>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Este mês</option>
            </select>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Pão Francês', margin: 45, cost: 0.25, price: 0.75, suggested: 1.00 },
              { name: 'Pão de Queijo', margin: 65, cost: 1.20, price: 3.50, suggested: 4.20 },
              { name: 'Croissant', margin: 75, cost: 2.50, price: 8.90, suggested: 10.00 },
              { name: 'Bolo de Chocolate', margin: 85, cost: 15.00, price: 45.00, suggested: 52.50 }
            ].map(product => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-red-600 flex items-center">
                      <TrendingDown className="w-3 h-3 mr-1" />
                      {product.margin}% margem
                    </span>
                    <span className="text-xs text-gray-500">
                      Atual: R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-emerald-600">
                      Sugerido: R$ {product.suggested.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-800">
                  •••
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alertas e Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Alertas de Precificação</h2>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                2 Críticos
              </span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                2 Alertas
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <AlertCard
              type="error"
              title="Produtos com Margem Crítica"
              description="5 produtos estão com margem abaixo de 50%: Pão Francês (45%), Pão de Queijo (65%), Croissant (75%), Bolo de Chocolate (85%)."
            />
            <AlertCard
              type="error"
              title="Alerta de Custos"
              description="Aumento de 15% no custo da farinha impactará a margem de 12 produtos. Necessária revisão imediata dos preços."
            />
            <AlertCard
              type="warning"
              title="Margem Abaixo da Meta"
              description="3 produtos estão com margem abaixo da meta de 150%. Recomendada análise de custos e precificação."
            />
            <AlertCard
              type="warning"
              title="Preços Desatualizados"
              description="4 produtos não têm atualização de preço há mais de 60 dias. Recomendada revisão da precificação."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Indicadores de Precificação</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Markup Médio</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                2.85x
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Margem Média</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                185%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Produtos Críticos</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                5
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Meta de Margem</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                150%
              </span>
            </div>
            <div className="pt-4 border-t">
              <button className="w-full px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors">
                Ver Relatório Completo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela de Produtos */}
      <ProductTable />
    </div>
  );
}