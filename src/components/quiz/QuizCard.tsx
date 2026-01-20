import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { Quiz } from "@/data/quizData";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  return (
    <button
      onClick={() => onSelect(quiz)}
      className={cn(
        "group w-full p-6 rounded-2xl bg-card shadow-card border border-border",
        "hover:shadow-elevated hover:scale-[1.02] hover:border-primary/30",
        "transition-all duration-300 text-left",
        "active:scale-[0.98]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4",
            "bg-gradient-to-br",
            quiz.color
          )}>
            {quiz.icon}
          </div>
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            {quiz.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            {quiz.description}
          </p>
          <span className="text-xs font-medium text-primary">
            {quiz.questions.length} questions
          </span>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
};

export default QuizCard;
