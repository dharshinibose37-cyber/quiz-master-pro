import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ScoreScreen from "./ScoreScreen";
import type { Quiz } from "@/data/quizData";

interface QuizScreenProps {
  quiz: Quiz;
  onBack: () => void;
}

const QuizScreen = ({ quiz, onBack }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <ScoreScreen
        score={score}
        total={quiz.questions.length}
        quizTitle={quiz.title}
        onRestart={handleRestart}
        onHome={onBack}
      />
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-full hover:bg-accent"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <ProgressBar
            current={currentQuestion + 1}
            total={quiz.questions.length}
          />
        </div>
      </div>

      <QuestionCard
        key={currentQuestion}
        question={quiz.questions[currentQuestion]}
        onAnswer={handleAnswer}
        questionNumber={currentQuestion + 1}
      />
    </div>
  );
};

export default QuizScreen;
