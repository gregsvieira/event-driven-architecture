import QuizCorrected from "../../domain/event/QuizCorrected";
import Mailer from "../service/Mailer";
import Handler from "./Handler";

export default class QuizCommunicatorHandler implements Handler {
    eventName = "QuizCorrected";

    constructor (readonly mailer: Mailer) {}

    async handle(event: QuizCorrected): Promise<void> {
      this.mailer.send(event.email, `Hello ${event.userName}! Your score is ${event.grade}`);
    }
}