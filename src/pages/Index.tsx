import { useState } from "react";
import { Brain } from "lucide-react";
import QuizCard from "@/components/quiz/QuizCard";
import QuizScreen from "@/components/quiz/QuizScreen";
import { quizzes, type Quiz } from "@/data/quizData";

const Index = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  if (selectedQuiz) {
    return (
      <div className="min-h-screen gradient-hero py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <QuizScreen
            quiz={selectedQuiz}
            onBack={() => setSelectedQuiz(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6 shadow-card">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            QuizMaster
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Challenge yourself with fun quizzes and test your knowledge across different topics
          </p>
        </header>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-6">
            Choose a Quiz
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz, index) => (
              <div
                key={quiz.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <QuizCard quiz={quiz} onSelect={setSelectedQuiz} />
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ • Select a quiz to get started</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
