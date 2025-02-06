import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1) {
      return { error: 'Invalid input, please provide a positive integer' };
    }
    
    const fibonacci = (num: number): number[] => {
      const sequence = [0, 1];
      for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence.slice(0, num);
    };

    return { sequence: fibonacci(num) };
  }


  @Get('prime/:number')
  isPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 2) {
      return { isPrime: false };
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return { isPrime: false };
      }
    }
    return { isPrime: true };
  }
}
