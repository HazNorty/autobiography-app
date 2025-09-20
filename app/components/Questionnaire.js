'use client';

import { useState } from 'react';
import { questions as questionSections } from '../lib/questions';

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [story, setStory] = useState('');
  const [isStoryGenerated, setIsStoryGenerated] = useState(false);
  // New state to track when the AI is working
  const [isLoading, setIsLoading] = useState(false); 

  const handleInputChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // The new async function to handle the API call
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading
    setStory(''); // Clear any previous story

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong with the API call');
      }

      const data = await response.json();
      setStory(data.story);
  setIsStoryGenerated(true);

    } catch (error) {
      console.error("Failed to generate story:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false); // Stop loading, whether it succeeded or failed
    }
  };

  return (
    <div className="w-full">
      {isStoryGenerated ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Your Autobiography</h2>
          <p className="text-gray-300 whitespace-pre-line">{story}</p>
          <button
            onClick={() => setIsStoryGenerated(false)}
            className="mt-6 px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12">
          {questionSections.map((section) => (
            <div key={section.sectionId} className="space-y-8 border-t border-gray-700 pt-8 first:border-t-0 first:pt-0">
              <h2 className="text-3xl font-bold text-blue-400">{section.title}</h2>
              {section.subsections.map((subsection) => (
                <div key={subsection.subsectionId} className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-300">{subsection.title}</h3>
                  {subsection.questions.map((q) => (
                    <div key={q.id}>
                      <label htmlFor={q.id} className="block text-lg font-medium text-gray-200 mb-2">{q.label}</label>
                      <textarea id={q.id} name={q.id} rows={5} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500" placeholder={q.placeholder} onChange={(e) => handleInputChange(q.id, e.target.value)} required />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            disabled={isLoading} // The button is disabled while the AI is thinking
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating... Please Wait...' : 'Generate My Story'}
          </button>
        </form>
      )}
    </div>
  );
}