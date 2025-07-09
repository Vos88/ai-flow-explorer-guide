
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, ExternalLink, Eye } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';

interface ConceptNodeProps {
  concept: MLConcept;
  level: number;
  onViewDetails: (concept: MLConcept) => void;
}

export const ConceptNode: React.FC<ConceptNodeProps> = ({ concept, level, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = concept.children && concept.children.length > 0;
  const indent = level * 24;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(concept);
  };

  return (
    <div className="concept-node">
      {/* Main Node */}
      <div 
        className={`flex items-center py-3 px-4 rounded-lg border-2 mb-2 cursor-pointer transition-all duration-300 hover:shadow-md transform hover:scale-[1.01] ${
          hasChildren ? 'hover:scale-[1.02]' : ''
        }`}
        style={{ 
          marginLeft: `${indent}px`,
          borderColor: concept.color,
          backgroundColor: `${concept.color}15`
        }}
        onClick={toggleExpanded}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren && (
          <div className="mr-3 transition-transform duration-200">
            {isExpanded ? (
              <ChevronDown size={20} style={{ color: concept.color }} />
            ) : (
              <ChevronRight size={20} style={{ color: concept.color }} />
            )}
          </div>
        )}
        
        {/* Node Content */}
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
          
          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleViewDetails}
              className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-50 rounded border border-gray-300 text-xs font-medium transition-colors shadow-sm"
            >
              <Eye size={12} />
              View Details
            </button>
            
            {concept.codeExample && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                <Code size={12} />
                Has Code
              </div>
            )}
            
            {concept.externalLinks && concept.externalLinks.length > 0 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs font-medium text-blue-700">
                <ExternalLink size={12} />
                {concept.externalLinks.length} Link{concept.externalLinks.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Child Nodes with Animation */}
      {isExpanded && hasChildren && (
        <div 
          className="child-nodes animate-fade-in origin-center"
          style={{
            animation: 'fadeInScale 400ms ease-in-out'
          }}
        >
          {concept.children!.map((child) => (
            <ConceptNode 
              key={child.id} 
              concept={child} 
              level={level + 1}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};
