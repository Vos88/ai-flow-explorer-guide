
import React, { useState } from 'react';
import { ConceptNode } from './ConceptNode';
import { ConceptCard } from './ConceptCard';
import { ConceptBreadcrumb } from './ConceptBreadcrumb';
import { mlConceptsTree, MLConcept } from '@/data/mlConceptsTree';

export const MLConceptTree: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<MLConcept | null>(null);
  const [navigationPath, setNavigationPath] = useState<MLConcept[]>([mlConceptsTree]);
  const [currentStage, setCurrentStage] = useState<MLConcept>(mlConceptsTree);

  const handleNodeClick = (concept: MLConcept) => {
    // If it's a leaf node (no children), show detailed view
    if (!concept.children || concept.children.length === 0) {
      setSelectedConcept(concept);
      // Add the leaf concept to the navigation path for breadcrumb display
      const newPath = [...navigationPath, concept];
      setNavigationPath(newPath);
      return;
    }

    // If it has children, navigate to that stage
    const newPath = [...navigationPath, concept];
    setNavigationPath(newPath);
    setCurrentStage(concept);
  };

  const handleBackToTree = () => {
    setSelectedConcept(null);
    // Remove the leaf concept from navigation path when going back
    if (navigationPath.length > 1) {
      const newPath = navigationPath.slice(0, -1);
      setNavigationPath(newPath);
      setCurrentStage(newPath[newPath.length - 1]);
    }
  };

  const handleBreadcrumbNavigate = (index: number) => {
    const newPath = navigationPath.slice(0, index + 1);
    setNavigationPath(newPath);
    setCurrentStage(newPath[newPath.length - 1]);
    setSelectedConcept(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Machine Learning & AI Concept Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Navigate through the interconnected world of Artificial Intelligence and Machine Learning. 
          Explore concepts stage by stage, diving deeper into each area of interest.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <ConceptBreadcrumb 
        path={navigationPath}
        onNavigate={handleBreadcrumbNavigate}
      />

      {selectedConcept ? (
        /* Detailed View for Leaf Nodes */
        <div className="animate-fade-in">
          <ConceptCard 
            concept={selectedConcept}
            breadcrumbPath={navigationPath}
            onBack={handleBackToTree}
          />
        </div>
      ) : (
        <>
          {/* Current Stage Title */}
          <div className="text-center mb-8">
            <h2 
              className="text-3xl font-bold mb-3"
              style={{ color: currentStage.color }}
            >
              {currentStage.title}
            </h2>
            {currentStage.id !== 'ai' && (
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                {currentStage.description}
              </p>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
            <p className="text-blue-800">
              <strong>Navigate:</strong> Click on any concept to explore its subcategories, 
              or click on leaf concepts to view detailed information with examples and applications.
            </p>
          </div>

          {/* Current Stage Nodes */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {(currentStage.children || []).map((concept) => (
                <div
                  key={concept.id}
                  className="transform transition-all duration-400 ease-in-out hover:scale-105"
                >
                  <ConceptNode 
                    concept={concept} 
                    level={0} 
                    onNodeClick={handleNodeClick}
                    isStageMode={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        <p>Interactive ML/AI Concept Explorer • Navigate stage by stage • Discover knowledge paths</p>
      </div>
    </div>
  );
};
