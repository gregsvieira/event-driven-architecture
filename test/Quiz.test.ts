import Quiz from "../src/domain/entity/Quiz";

test("Should create a quiz", function () {
  const questions = [
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

  const quiz = new Quiz(1, questions);
  expect(quiz.idQuiz).toBe(1);
  expect(quiz.questions[0].id).toBe(1);
  expect(quiz.questions).toHaveLength(2);
});