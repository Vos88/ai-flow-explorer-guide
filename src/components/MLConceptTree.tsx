
import React from 'react';
import { ConceptNode } from './ConceptNode';
import { mlConceptsTree } from '@/data/mlConceptsTree';

export const MLConceptTree: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Machine Learning & AI Concept Tree
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the interconnected world of Artificial Intelligence and Machine Learning. 
          Click on any concept to expand and discover its subcategories, explanations, and code examples.
        </p>
      </div>

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
          <strong>How to use:</strong> Click on any concept to expand its subcategories. 
          Look for "Show Code" buttons to see practical examples, and external links for additional resources.
        </p>
      </div>

      {/* Tree Visualization */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ConceptNode concept={mlConceptsTree} level={0} />
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Interactive ML/AI Concept Tree • Click to explore • Expand your knowledge</p>
      </div>
    </div>
  );
};
