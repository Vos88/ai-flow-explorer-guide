
import React from 'react';
import { ExternalLink, Code, ArrowLeft } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConceptCardProps {
  concept: MLConcept;
  onBack: () => void;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, onBack }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-4 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Tree
      </button>

      <Card className="shadow-lg">
        <CardHeader 
          className="border-l-4"
          style={{ borderLeftColor: concept.color }}
        >
          <CardTitle 
            className="text-2xl font-bold"
            style={{ color: concept.color }}
          >
            {concept.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Description</h3>
            <p className="text-gray-700 leading-relaxed">{concept.description}</p>
          </div>

          {/* Code Example */}
          {concept.codeExample && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
                <Code size={18} />
                Code Example
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm border">
                <code>{concept.codeExample}</code>
              </pre>
            </div>
          )}

          {/* External Links */}
          {concept.externalLinks && concept.externalLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">External Resources</h3>
              <div className="space-y-2">
                {concept.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                  >
                    <ExternalLink size={16} className="text-blue-600" />
                    <span className="text-blue-700 font-medium">{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
