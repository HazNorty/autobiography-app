// 👇 Make sure this import does NOT have { } around Questionnaire
import Questionnaire from './components/Questionnaire';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">My Autobiography App</h1>
        <p className="mb-8 text-center text-gray-400">Answer the questions below to generate your life story.</p>
        <Questionnaire />
      </div>
    </main>
  );
}