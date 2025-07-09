
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';

interface ConceptBreadcrumbProps {
  path: MLConcept[];
  onNavigate: (index: number) => void;
}

export const ConceptBreadcrumb: React.FC<ConceptBreadcrumbProps> = ({ path, onNavigate }) => {
  if (path.length <= 1) return null;

  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {path.map((concept, index) => (
          <li key={concept.id} className="flex items-center">
            {index > 0 && (
              <ChevronRight size={14} className="text-gray-400 mx-2" />
            )}
            <button
              onClick={() => onNavigate(index)}
              className={`px-2 py-1 rounded transition-colors ${
                index === path.length - 1
                  ? 'text-gray-800 font-medium cursor-default'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
              style={{ 
                color: index === path.length - 1 ? concept.color : undefined 
              }}
            >
              {concept.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};
