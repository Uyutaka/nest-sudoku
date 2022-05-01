import { Injectable } from '@nestjs/common';
import { SudokuResponse, Board } from './types';

@Injectable()
export class AppService {
  getHardCodeSudoku(): SudokuResponse {
    const answer = [
      [8, 5, 3, 4, 6, 1, 9, 2, 7],
      [9, 6, 2, 3, 7, 8, 1, 5, 4],
      [4, 1, 7, 5, 2, 9, 6, 8, 3],
      [6, 9, 1, 2, 4, 3, 5, 7, 8],
      [2, 4, 5, 7, 8, 6, 3, 1, 9],
      [7, 3, 8, 9, 1, 5, 4, 6, 2],
      [5, 7, 4, 1, 3, 2, 8, 9, 6],
      [1, 2, 6, 8, 9, 4, 7, 3, 5],
      [3, 8, 9, 6, 5, 7, 2, 4, 1]
    ] as Board;
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
