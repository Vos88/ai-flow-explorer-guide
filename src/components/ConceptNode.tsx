
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

  // Get neon border class based on concept ID or color
  const getNeonBorderClass = (conceptId: string) => {
    switch (conceptId) {
      case 'symbolic-ai':
        return 'neon-border-purple';
      case 'machine-learning':
        return 'neon-border-blue';
      case 'neural-networks':
        return 'neon-border-pink';
      case 'computer-vision':
        return 'neon-border-green';
      case 'nlp':
        return 'neon-border-cyan';
      default:
        // Rotate through colors based on concept ID hash
        const hash = conceptId.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const colors = ['neon-border-cyan', 'neon-border-blue', 'neon-border-purple', 'neon-border-pink', 'neon-border-green'];
        return colors[hash % colors.length];
    }
  };

  if (isStageMode) {
    const neonClass = getNeonBorderClass(concept.id);
    
    return (
      <div 
        className="concept-stage-card cursor-pointer group"
        onClick={handleClick}
      >
        <div className={`h-full p-6 rounded-xl ${neonClass} futuristic-card transition-all duration-300 transform hover:-translate-y-1`}>
          {/* Header with navigation indicator */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl text-white font-['Orbitron'] tracking-wide">
              {concept.title.toUpperCase()}
            </h3>
            {hasChildren ? (
              <ChevronRight 
                size={20} 
                className="text-white transition-transform group-hover:translate-x-1"
              />
            ) : (
              <Eye 
                size={20} 
                className="text-white opacity-60"
              />
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {concept.description}
          </p>
          
          {/* Indicators */}
          <div className="flex gap-2 mt-auto">
            {hasChildren && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded text-xs font-medium text-cyan-300 border border-cyan-500/30">
                <ChevronRight size={10} />
                {concept.children!.length} concept{concept.children!.length > 1 ? 's' : ''}
              </div>
            )}
            
            {concept.codeExample && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded text-xs font-medium text-green-300 border border-green-500/30">
                <Code size={10} />
                Code
              </div>
            )}
            
            {concept.externalLinks && concept.externalLinks.length > 0 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded text-xs font-medium text-blue-300 border border-blue-500/30">
                <ExternalLink size={10} />
                {concept.externalLinks.length} link{concept.externalLinks.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
          
          {/* Enter indicator in bottom right */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-50 font-mono">
            ENTER →
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
