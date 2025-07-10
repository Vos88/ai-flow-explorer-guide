
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
    if (!concept.children || concept.children.length === 0) {
      setSelectedConcept(concept);
      const newPath = [...navigationPath, concept];
      setNavigationPath(newPath);
      return;
    }

    const newPath = [...navigationPath, concept];
    setNavigationPath(newPath);
    setCurrentStage(concept);
  };

  const handleBackToTree = () => {
    setSelectedConcept(null);
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

  // Get neon border class based on concept color
  const getNeonBorderClass = (color: string) => {
    if (color.includes('cyan') || color.includes('180')) return 'neon-border-cyan';
    if (color.includes('blue') || color.includes('220')) return 'neon-border-blue';
    if (color.includes('purple') || color.includes('270')) return 'neon-border-purple';
    if (color.includes('pink') || color.includes('320')) return 'neon-border-pink';
    if (color.includes('green') || color.includes('120')) return 'neon-border-green';
    return 'neon-border-blue'; // default
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-black mb-4 gradient-text-primary font-['Orbitron']">
          AI EXPLORER
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Navigate the frontier of artificial intelligence
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <ConceptBreadcrumb 
        path={navigationPath}
        onNavigate={handleBreadcrumbNavigate}
      />

      {selectedConcept ? (
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
            <h2 className="text-4xl font-bold mb-3 gradient-text-primary font-['Orbitron']">
              {currentStage.title}
            </h2>
            {currentStage.id !== 'ai' && (
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {currentStage.description}
              </p>
            )}
          </div>

          {/* Instructions */}
          {currentStage.id === 'ai' && (
            <div className={`futuristic-card ${getNeonBorderClass('#00ffff')} p-4 mb-8 rounded-xl`}>
              <p className="text-cyan-200 text-center">
                <strong>Navigate:</strong> Click on any concept to explore its subcategories, 
                or click on leaf concepts to view detailed information with examples and applications.
              </p>
            </div>
          )}

          {/* Current Stage Nodes */}
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
