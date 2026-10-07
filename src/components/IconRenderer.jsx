import React from 'react';
import * as LucideIcons from 'lucide-react';

const IconRenderer = ({ name, size = 24, className = '', color }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles;
  return <IconComponent size={size} className={className} color={color} />;
};

export default IconRenderer;
