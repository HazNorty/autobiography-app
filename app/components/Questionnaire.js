'use client';

import { useState } from 'react';
import { questions } from '../lib/questions';

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [story, setStory] = useState('');
  const [isStoryGenerated, setIsStoryGenerated] = useState(false);

  const handleInputChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const generateStory = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all questions before generating your story.');
      return;
    }

    const narrative = `My name is ${answers.name}. My journey began in ${answers.birthplace}, a place that will always hold a special spot in my heart.

Reflecting on my early years, a particularly fond memory is of ${answers.childhood}. Those simple moments shaped much of who I am today. My school years were defined by my experience with ${answers.school}. It was a formative time that taught me a great deal.

As I moved into adulthood, my professional life took shape. My career path has been centered around ${answers.career}. It has been a challenging yet rewarding journey.

Today, my life is about ${answers.present}. I continue to learn and grow, and I am excited to see what the future holds.`;

    setStory(narrative);
    setIsStoryGenerated(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateStory();
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
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((q) => (
            <div key={q.id}>
              <label htmlFor={q.id} className="block text-lg font-medium text-gray-200 mb-2">
                {q.label}
              </label>
              {q.type === 'textarea' ? (
                <textarea
                  id={q.id}
                  name={q.id}
                  rows={4}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={q.placeholder}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  required
                />
              ) : (
                <input
                  type={q.type}
                  id={q.id}
                  name={q.id}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={q.placeholder}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Generate My Story
          </button>
        </form>
      )}
    </div>
  );
}