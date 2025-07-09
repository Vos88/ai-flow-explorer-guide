import React from 'react';
import { Code, ExternalLink, Eye, ChevronRight } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';

interface ConceptNodeProps {
  concept: MLConcept;
  level: number;
  onNodeClick: (concept: MLConcept) => void;
  isStageMode?: boolean;
}

export const ConceptNode: React.FC<ConceptNodeProps> = ({ 
  concept, 
  level, 
  onNodeClick,
  isStageMode = false 
}) => {
  const hasChildren = concept.children && concept.children.length > 0;

  const handleClick = () => {
    onNodeClick(concept);
  };

  if (isStageMode) {
    // Stage mode: display as cards in a grid
    return (
      <div 
        className="concept-stage-card cursor-pointer group"
        onClick={handleClick}
      >
        <div 
          className="h-full p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          style={{ 
            borderColor: concept.color,
            backgroundColor: `${concept.color}08`
          }}
        >
          {/* Header with navigation indicator */}
          <div className="flex items-center justify-between mb-4">
            <h3 
              className="font-bold text-xl"
              style={{ color: concept.color }}
            >
              {concept.title}
            </h3>
            {hasChildren ? (
              <ChevronRight 
                size={20} 
                style={{ color: concept.color }}
                className="transition-transform group-hover:translate-x-1"
              />
            ) : (
              <Eye 
                size={20} 
                style={{ color: concept.color }}
                className="opacity-60"
              />
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
            {concept.description}
          </p>
          
          {/* Indicators */}
          <div className="flex gap-2 mt-auto">
            {hasChildren && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                <ChevronRight size={10} />
                {concept.children!.length} concept{concept.children!.length > 1 ? 's' : ''}
              </div>
            )}
            
            {concept.codeExample && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                <Code size={10} />
                Code
              </div>
            )}
            
            {concept.externalLinks && concept.externalLinks.length > 0 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs font-medium text-blue-700">
                <ExternalLink size={10} />
                {concept.externalLinks.length} link{concept.externalLinks.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Legacy tree mode (keeping for backward compatibility if needed)
  return (
    <div className="concept-node">
      <div 
        className={`flex items-center py-3 px-4 rounded-lg border-2 mb-2 cursor-pointer transition-all duration-300 hover:shadow-md transform hover:scale-[1.01]`}
        style={{ 
          borderColor: concept.color,
          backgroundColor: `${concept.color}15`
        }}
        onClick={handleClick}
      >
        <div className="flex-1">
          <h3 
            className="font-semibold text-lg mb-1"
            style={{ color: concept.color }}
          >
            {concept.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {concept.description}
          </p>
        </div>
      </div>
    </div>
  );
};
