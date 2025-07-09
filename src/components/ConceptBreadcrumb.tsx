
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';

interface ConceptBreadcrumbProps {
  path: MLConcept[];
  onNavigate: (index: number) => void;
}

export const ConceptBreadcrumb: React.FC<ConceptBreadcrumbProps> = ({ path, onNavigate }) => {
  if (path.length <= 1) return null;

  return (
    <nav className="mb-8">
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <ol className="flex items-center space-x-2 text-sm flex-wrap">
          {path.map((concept, index) => (
            <li key={concept.id} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={14} className="text-gray-400 mx-2" />
              )}
              <button
                onClick={() => onNavigate(index)}
                className={`px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                  index === path.length - 1
                    ? 'text-white font-semibold cursor-default shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                style={{ 
                  backgroundColor: index === path.length - 1 ? concept.color : 'transparent',
                  color: index === path.length - 1 ? 'white' : undefined 
                }}
              >
                {index === 0 && <Home size={14} />}
                {concept.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
