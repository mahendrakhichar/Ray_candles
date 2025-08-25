import React, { useState, useEffect } from 'react';
import { Heart, Gift, Cake, Star, Sparkles, Trophy, RefreshCw, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const birthdayQuestions: Question[] = [
  {
    id: 1,
    question: "When did we meet each other, first time?",
    options: ["20-jun-2024", "20-may-2024", "19-may-2024", "21-jun-2024"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "When did we meet first time, in person?",
    options: ["16-nov-2024", "19-oct-2024", "15-oct-2024", "17-nov-2024"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What was the date, when we came into relationship?",
    options: ["29-sep-2024", "26-oct-2024", "27-sep-2024", "28-oct-2024"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Who is our relationship good",
    options: ["Lord Krishna", "Lord Shiva", "Lord Vishnu", "Hanuman ji"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "From how much day I (Mahi) didn't eat sugar ",
    options: ["10", "8", "6", "15"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "What is your latest NickName?",
    options: ["Chuha", "Puchu", "Chutki", "seeru"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the favourite diss of chuha ?",
    options: ["Chaumin", "Chole-Bhature", "Dry chilli Paneer", "Butter Masala Dosa"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is Mahi's favourite color?",
    options: ["Black", "Blue", "Red", "White"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is the color of snickers you gave to me ?",
    options: ["White-gray", "Blue-white", "Black-white", "white-green"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which is the first movie we watch together? ",
    options: ["365 days", "Tumbad", "jab we met", "Laila Majnu"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which is the best content we watch till today ",
    options: ["jab we met", "Little things", "Bandidos", "When life gives you tingers"],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "What do you typically do at a birthday party?",
    options: ["Study", "Celebrate", "Work", "Sleep"],
    correctAnswer: 1
  }
];

const birthdayMessages = [
  "🎉 Happy Happy Birthday sweetu, this is a small gift from my side, hope so you will like it 🌟",
  "🎈 Sweetu this is your second birthday which we are celebrating together, do you remember the first one...... 🌈",
    "✨ Sweetu many many returns of the day, May this year come with lots of positive energy, love, happiness and sucess ",
    "✨ I will give me 110 % to achieve all of these, I am always here for you. Hope so we will meet soon, so i can hug you and show that how much i love you 🥳",
];

function Temp() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    // Randomly select 3 questions when component mounts
    const shuffled = [...birthdayQuestions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 3));
  }, []);

  const handleMessageClick = (message: string) => {
    setSelectedMessage(message);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
        setShowResult(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    // Shuffle questions again
    const shuffled = [...birthdayQuestions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 3));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100">
      {/* Header */}
      <div className="text-center py-8 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent mb-4">
          🎉 Happy Birthday, Sweetu! 🎉
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          A special day deserves a special celebration!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center px-4 mb-12">
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Birthday Celebration"
            className="w-full max-w-2xl h-64 md:h-80 object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute top-4 right-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Gift className="w-8 h-8 text-pink-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Message Buttons Section */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          <Heart className="inline w-8 h-8 mr-2 text-pink-500" />
          Birthday Wishes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {birthdayMessages.map((message, index) => (
            <button
              key={index}
              onClick={() => handleMessageClick(message)}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  Wish #{index + 1}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
              </div>
              <p className="text-gray-600 mt-2">Click to reveal a special message!</p>
            </button>
          ))}
        </div>

        {selectedMessage && (
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-3xl shadow-2xl text-white text-center animate-pulse">
            <Star className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
            <p className="text-lg md:text-xl leading-relaxed">{selectedMessage}</p>
          </div>
        )}
      </div>

      {/* Quiz Game Section */}
      <div className="max-w-2xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          <Cake className="inline w-8 h-8 mr-2 text-yellow-500" />
          Birthday Quiz Game
        </h2>

        {!quizStarted && !quizCompleted && (
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
            <div className="mb-6">
              <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready for a Fun Quiz?</h3>
              <p className="text-gray-600">Test your birthday knowledge with 3 random questions!</p>
            </div>
            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        )}

        {quizStarted && !quizCompleted && quizQuestions.length > 0 && (
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm text-gray-500">Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {quizQuestions[currentQuestionIndex].question}
            </h3>

            <div className="space-y-3">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-xl transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-pink-300'
                      : selectedAnswer === index
                      ? 'bg-gray-200 border-2 border-gray-400'
                      : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {showResult && (
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
            <div className="mb-6">
              {score === quizQuestions.length ? (
                <div>
                  <div className="text-6xl mb-4">🎉🎊🥳</div>
                  <h3 className="text-3xl font-bold text-green-600 mb-2">Perfect Score!</h3>
                  <p className="text-lg text-gray-700">Amazing! You got all {score} questions right!</p>
                  <div className="mt-6">
                    <img 
                      src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg" 
                      alt="Perfect Score Celebration"
                      className="w-full max-w-sm h-48 object-cover rounded-2xl mx-auto shadow-lg animate-pulse"
                    />
                  </div>
                </div>
              ) : score >= Math.floor(quizQuestions.length / 2) ? (
                <div>
                  <div className="text-6xl mb-4">🎈🎂✨</div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">Great Job!</h3>
                  <p className="text-lg text-gray-700">You got {score} out of {quizQuestions.length} questions right!</p>
                </div>
              ) : (
                <div>
                  <div className="text-6xl mb-4">🎯🎪🎨</div>
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">Good Try!</h3>
                  <p className="text-lg text-gray-700">You got {score} out of {quizQuestions.length} questions right!</p>
                </div>
              )}
            </div>
            
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <RefreshCw className="inline w-5 h-5 mr-2" />
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-8 px-4">
        <p className="text-gray-600">
          🎈 Made with love for your special day! 🎈
        </p>
      </div>
    </div>
  );
}

export default Temp;