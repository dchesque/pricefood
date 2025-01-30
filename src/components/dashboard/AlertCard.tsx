import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertCardProps {
  title: string;
  description: string;
  type: 'warning' | 'error';
}

export function AlertCard({ title, description, type }: AlertCardProps) {
  const bgColor = type === 'warning' ? 'bg-orange-50' : 'bg-red-50';
  const textColor = type === 'warning' ? 'text-orange-800' : 'text-red-800';
  const iconColor = type === 'warning' ? 'text-orange-500' : 'text-red-500';

  return (
    <div className={`${bgColor} rounded-lg p-4`}>
      <div className="flex items-start">
        <AlertTriangle className={`${iconColor} w-5 h-5 mt-0.5`} />
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${textColor}`}>{title}</h3>
          <p className={`mt-1 text-sm ${textColor} opacity-90`}>{description}</p>
        </div>
      </div>
    </div>
  );
}