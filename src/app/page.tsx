'use client';

import { useState } from 'react';
import { questions } from '@/data/questions';
import { captureEvent } from '@/lib/posthog';

export default function Home() {
  const [selectedQuestions, setSelectedQuestions] = useState<Set<number>>(new Set());
  const [showScore, setShowScore] = useState(false);

  const toggleQuestion = (id: number) => {
    const newSelected = new Set(selectedQuestions);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
      // Track when a question is checked
      captureEvent('question_checked', {
        question_id: id,
        question_text: questions.find(q => q.id === id)?.text,
        category: questions.find(q => q.id === id)?.category
      });
    }
    setSelectedQuestions(newSelected);
  };

  const calculateScore = () => {
    return 100 - Math.round((selectedQuestions.size / questions.length) * 100);
  };

  const clearCheckboxes = () => {
    setSelectedQuestions(new Set());
    setShowScore(false);
    captureEvent('checkboxes_cleared');
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "You&apos;re practically from away!";
    if (score >= 70) return "You&apos;re getting there, bub!";
    if (score >= 50) return "You&apos;re a part-time Mainer!";
    if (score >= 30) return "Now you&apos;re talking, ayuh!";
    return "You&apos;re a true Mainah!";
  };

  const handleCalculateScore = () => {
    const score = calculateScore();
    setShowScore(true);
    
    // Track the final score
    captureEvent('test_completed', {
      score,
      questions_answered: selectedQuestions.size,
      total_questions: questions.length,
      selected_questions: Array.from(selectedQuestions).map(id => ({
        id,
        text: questions.find(q => q.id === id)?.text,
        category: questions.find(q => q.id === id)?.category
      }))
    });
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="title-text">
          <span style={{ textDecoration: 'line-through', color: '#8B0000' }}>The Official</span>
          {' '}Maine Purity Test
        </div>
        
        <div className="subtitle-text">
          Have you ever...
        </div>

        <div className="subtitle-text" style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
          The Maine Purity Test measures how much of a true Mainer you really are.<br />
          Check off all the quintessential Maine experiences you&apos;ve had to find out!
        </div>

        <div className="caution-text">
          Caution: This is not a bucket list. Some activities may be dangerous if not properly prepared.
        </div>

        <div className="instructions-text">
          Click on every item you have done.
        </div>

        <div className="question-list">
          {questions.map((q) => (
            <div key={q.id} className="question-item">
              <input
                type="checkbox"
                id={`q${q.id}`}
                checked={selectedQuestions.has(q.id)}
                onChange={() => toggleQuestion(q.id)}
                className="question-checkbox"
              />
              <label htmlFor={`q${q.id}`} style={{ cursor: 'pointer' }}>
                <span className="question-number">{q.id}.</span>
                {q.text}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8 mb-8">
          <button
            onClick={handleCalculateScore}
            className="px-8 py-3 text-xl rounded-full bg-[#D1F2D1] hover:bg-[#B1E3B1] transition-colors border border-black"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Calculate My Score!
          </button>
          <button
            onClick={clearCheckboxes}
            className="px-8 py-3 text-xl rounded-full bg-[#D1F2D1] hover:bg-[#B1E3B1] transition-colors border border-black"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Clear checkboxes
          </button>
        </div>

        {showScore && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Your score:</h2>
            <p className="text-8xl font-bold mb-4" style={{ color: '#FF0000' }}>{calculateScore()}</p>
            <p className="text-2xl mb-4">Thank you for your submission!</p>
            <p className="text-xl mb-8" dangerouslySetInnerHTML={{ __html: getScoreMessage(calculateScore()) }} />
            <p className="text-lg">
              The Maine Purity test was created for Mainers and visitors alike to measure their Maine experience.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
