import { Injectable } from '@nestjs/common';
import { questions } from './questions';
import { SudokuResponse, Board } from './types';

@Injectable()
export class AppService {
  getHardCodeSudoku(): SudokuResponse {
    const qId = Math.floor(Math.random() * ((questions.length - 1) - 0)) // from 0 to 1
    const answer = questions[qId];
    const question = JSON.parse(JSON.stringify(answer));

    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < 3; j++) {
        const rnd = Math.floor(Math.random() * (2 - 0)) // from 0 to 2
        question[i][j * 3 + rnd] = 0
      }
    }

    return {
      question: question,
      answer: answer,
      remainingQuestion: 27
    }
  }
}
