
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, ExternalLink } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';

interface ConceptNodeProps {
  concept: MLConcept;
  level: number;
}

export const ConceptNode: React.FC<ConceptNodeProps> = ({ concept, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const hasChildren = concept.children && concept.children.length > 0;
  const indent = level * 24;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="concept-node">
      {/* Main Node */}
      <div 
        className={`flex items-center py-3 px-4 rounded-lg border-2 mb-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
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
          <div className="mr-3">
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
          <div className="flex gap-2 mt-2">
            {concept.codeExample && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCode(!showCode);
                }}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium"
              >
                <Code size={12} />
                {showCode ? 'Hide Code' : 'Show Code'}
              </button>
            )}
            
            {concept.externalLinks && concept.externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded text-xs font-medium text-blue-700"
              >
                <ExternalLink size={12} />
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example */}
      {showCode && concept.codeExample && (
        <div 
          className="mb-4 rounded-lg border-l-4"
          style={{ 
            marginLeft: `${indent + 24}px`,
            borderLeftColor: concept.color
          }}
        >
          <pre className="bg-gray-900 text-green-400 p-4 rounded-r-lg overflow-x-auto text-sm">
            <code>{concept.codeExample}</code>
          </pre>
        </div>
      )}

      {/* Child Nodes */}
      {isExpanded && hasChildren && (
        <div className="child-nodes">
          {concept.children!.map((child) => (
            <ConceptNode 
              key={child.id} 
              concept={child} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
