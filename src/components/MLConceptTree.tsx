
import React, { useState } from 'react';
import { ConceptNode } from './ConceptNode';
import { ConceptCard } from './ConceptCard';
import { ConceptBreadcrumb } from './ConceptBreadcrumb';
import { mlConceptsTree, MLConcept } from '@/data/mlConceptsTree';

export const MLConceptTree: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<MLConcept | null>(null);
  const [navigationPath, setNavigationPath] = useState<MLConcept[]>([mlConceptsTree]);

  const handleViewDetails = (concept: MLConcept) => {
    setSelectedConcept(concept);
    
    // Build navigation path to this concept
    const path = findPathToConcept(mlConceptsTree, concept.id);
    if (path) {
      setNavigationPath(path);
    }
  };

  const handleBackToTree = () => {
    setSelectedConcept(null);
  };

  const handleBreadcrumbNavigate = (index: number) => {
    setNavigationPath(navigationPath.slice(0, index + 1));
    setSelectedConcept(null);
  };

  // Helper function to find path to a concept
  const findPathToConcept = (root: MLConcept, targetId: string, currentPath: MLConcept[] = []): MLConcept[] | null => {
    const newPath = [...currentPath, root];
    
    if (root.id === targetId) {
      return newPath;
    }
    
    if (root.children) {
      for (const child of root.children) {
        const result = findPathToConcept(child, targetId, newPath);
        if (result) return result;
      }
    }
    
    return null;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Machine Learning & AI Concept Tree
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the interconnected world of Artificial Intelligence and Machine Learning. 
          Click on any concept to expand and discover its subcategories, or view detailed information.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <ConceptBreadcrumb 
        path={navigationPath}
        onNavigate={handleBreadcrumbNavigate}
      />

      {selectedConcept ? (
        /* Detailed View */
        <div className="animate-fade-in">
          <ConceptCard 
            concept={selectedConcept}
            onBack={handleBackToTree}
          />
        </div>
      ) : (
        <>
          {/* Legend */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">Color Coding:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#f97316' }}></div>
                <span>Supervised Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ec4899' }}></div>
                <span>Unsupervised Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3b82f6' }}></div>
                <span>Neural Networks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#10b981' }}></div>
                <span>Reinforcement Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#059669' }}></div>
                <span>Natural Language Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#dc2626' }}></div>
                <span>Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#6366f1' }}></div>
                <span>Core AI Concepts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#8b5cf6' }}></div>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>How to use:</strong> Click on any concept to expand its subcategories, or click "View Details" 
              to see comprehensive information including code examples and external resources.
            </p>
          </div>

          {/* Tree Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ConceptNode 
              concept={navigationPath[navigationPath.length - 1]} 
              level={0} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </>
      )}

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Interactive ML/AI Concept Tree • Click to explore • Expand your knowledge</p>
      </div>
    </div>
  );
};
