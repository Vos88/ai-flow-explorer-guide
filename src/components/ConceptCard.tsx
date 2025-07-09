
import React from 'react';
import { ExternalLink, Code, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Cog, Target } from 'lucide-react';
import { MLConcept } from '@/data/mlConceptsTree';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConceptCardProps {
  concept: MLConcept;
  breadcrumbPath: MLConcept[];
  onBack: () => void;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, breadcrumbPath, onBack }) => {
  // Get parent path excluding the current concept and root
  const parentPath = breadcrumbPath.slice(1, -1).map(c => c.title).join(' > ');

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Tree
      </button>

      <Card className="shadow-xl border-0 overflow-hidden">
        {/* Header Section */}
        <CardHeader 
          className="border-l-8 bg-gradient-to-r from-gray-50 to-white"
          style={{ borderLeftColor: concept.color }}
        >
          <div className="space-y-3">
            <CardTitle 
              className="text-4xl font-bold flex items-center gap-3"
              style={{ color: concept.color }}
            >
              🧠 {concept.title}
            </CardTitle>
            {parentPath && (
              <p className="text-lg text-gray-600 italic">
                {parentPath}
              </p>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8">
          {/* Overview Section */}
          <section>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              🔍 Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {concept.description}
            </p>
          </section>

          {/* How It Works Section */}
          {concept.technicalDescription && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Cog size={24} />
                🧰 How It Works
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {concept.technicalDescription}
              </p>
            </section>
          )}

          {/* Applications Section */}
          {concept.applications && concept.applications.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Target size={24} />
                🧪 Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {concept.applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb size={16} className="text-blue-600" />
                      <span className="text-blue-700 font-medium">{app}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Advantages Section */}
          {concept.advantages && concept.advantages.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                ✅ Advantages
              </h3>
              <ul className="space-y-3">
                {concept.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{advantage}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Limitations Section */}
          {concept.limitations && concept.limitations.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                ⚠️ Limitations
              </h3>
              <ul className="space-y-3">
                {concept.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{limitation}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Code Example Section */}
          {concept.codeExample && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Code size={24} />
                💻 Code Example
              </h3>
              <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm border shadow-inner">
                <code>{concept.codeExample}</code>
              </pre>
            </section>
          )}

          {/* External Resources Section */}
          {concept.externalLinks && concept.externalLinks.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                🔗 External Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {concept.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors group"
                  >
                    <ExternalLink size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-700 font-medium">{link.title}</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
