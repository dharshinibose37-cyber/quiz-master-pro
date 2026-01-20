import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home, Star } from "lucide-react";

interface ScoreScreenProps {
  score: number;
  total: number;
  quizTitle: string;
  onRestart: () => void;
  onHome: () => void;
}

const ScoreScreen = ({ score, total, quizTitle, onRestart, onHome }: ScoreScreenProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreMessage = () => {
    if (percentage === 100) return { text: "Perfect Score!", emoji: "🎉" };
    if (percentage >= 80) return { text: "Excellent!", emoji: "🌟" };
    if (percentage >= 60) return { text: "Good Job!", emoji: "👍" };
    if (percentage >= 40) return { text: "Keep Learning!", emoji: "📚" };
    return { text: "Try Again!", emoji: "💪" };
  };

  const { text, emoji } = getScoreMessage();

  const getScoreColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="text-center animate-fade-in">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 animate-bounce-in">
          <Trophy className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {text} {emoji}
        </h1>
        <p className="text-muted-foreground">
          You completed the {quizTitle} quiz
        </p>
      </div>

      <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-8 h-8 transition-all duration-500",
                i < Math.ceil((percentage / 100) * 5)
                  ? "text-warning fill-warning"
                  : "text-muted-foreground/30"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        
        <div className={cn("text-6xl md:text-7xl font-extrabold mb-2", getScoreColor())}>
          {percentage}%
        </div>
        
        <p className="text-lg text-muted-foreground">
          <span className="font-bold text-foreground">{score}</span> out of{" "}
          <span className="font-bold text-foreground">{total}</span> correct
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={onRestart}
          size="lg"
          className="gradient-primary text-primary-foreground font-semibold gap-2 shadow-soft hover:shadow-card transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </Button>
        <Button
          onClick={onHome}
          variant="outline"
          size="lg"
          className="font-semibold gap-2"
        >
          <Home className="w-5 h-5" />
          Choose Another Quiz
        </Button>
      </div>
    </div>
  );
};

export default ScoreScreen;
