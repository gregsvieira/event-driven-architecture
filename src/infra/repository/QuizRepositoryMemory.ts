import Quiz from "../../domain/entity/Quiz";
import QuizRepository from "../../domain/repository/QuizRepository";

export default class QuizRepositoryMemory implements QuizRepository {
  quizzes: Quiz[];

  constructor () {
    this.quizzes = [
      {
        idQuiz: 1,
        questions: [
          {
            id: 1, 
            description: "Javascript is performatic?", answers: [ 
              { id: "a", description: "Yes"}, 
              { id: "b", description: "No"}
            ],
            correctAnswer: "a"
          },
          { 
          id: 2, 
          description: "Nodejs is a language?", answers: [ 
            { id: "a", description: "Yes"}, 
            { id: "b", description: "No "}
          ],
          correctAnswer: "b"
          }
        ]
      }
    ];
  }
  async get(idQuiz: number): Promise<Quiz> {
    const quiz = this.quizzes.find(quiz => quiz.idQuiz === idQuiz);
    if (!quiz) throw new Error("Quiz not found");
    return quiz;
  }
}