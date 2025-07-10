
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
      <div className="futuristic-card neon-border-cyan rounded-xl p-4">
        <ol className="flex items-center space-x-2 text-sm flex-wrap">
          {path.map((concept, index) => (
            <li key={concept.id} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={14} className="text-cyan-400 mx-2" />
              )}
              <button
                onClick={() => onNavigate(index)}
                className={`px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2 font-mono ${
                  index === path.length - 1
                    ? 'text-cyan-300 font-bold cursor-default bg-cyan-500/20 border border-cyan-500/50'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30'
                }`}
              >
                {index === 0 && <Home size={14} />}
                {concept.title.toUpperCase()}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
