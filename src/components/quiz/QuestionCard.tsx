import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import type { Question } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
}

const QuestionCard = ({ question, onAnswer, questionNumber }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(index);
    setHasAnswered(true);
    
    const isCorrect = index === question.correctAnswer;
    
    // Delay before moving to next question
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const getOptionClass = (index: number) => {
    if (!hasAnswered) {
      return selectedAnswer === index 
        ? "border-primary bg-primary/5" 
        : "border-border hover:border-primary/50 hover:bg-accent";
    }

    if (index === question.correctAnswer) {
      return "border-success bg-success/10 animate-pulse-success";
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "border-destructive bg-destructive/10 animate-shake";
    }

    return "border-border opacity-50";
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Question {questionNumber}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(index)}
            disabled={hasAnswered}
            className={cn(
              "w-full p-4 md:p-5 rounded-xl border-2 text-left transition-all duration-300",
              "flex items-center justify-between gap-4",
              "font-medium text-foreground",
              getOptionClass(index),
              !hasAnswered && "cursor-pointer active:scale-[0.98]",
              hasAnswered && "cursor-default"
            )}
          >
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-base md:text-lg">{option}</span>
            </div>
            
            {hasAnswered && index === question.correctAnswer && (
              <Check className="w-6 h-6 text-success animate-bounce-in" />
            )}
            {hasAnswered && selectedAnswer === index && index !== question.correctAnswer && (
              <X className="w-6 h-6 text-destructive animate-bounce-in" />
            )}
          </button>
        ))}
      </div>

      {hasAnswered && question.explanation && (
        <div className="mt-6 p-4 rounded-xl bg-accent/50 border border-border animate-fade-in">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
