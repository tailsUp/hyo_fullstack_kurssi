//type Operation = 'multiply' | 'add' | 'divide';
export type Operation = 'multiply' | 'add' | 'divide';

//const calculator = (a: number, b: number, op: Operation) : number | string => {
export const calculator = (a: number, b: number, op: Operation) : number => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};

try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

//console.log(calculator(4, 4, 'multiply'));
const a1: number = Number(process.argv[2]);
const b2: number = Number(process.argv[3]);
//const c3: Operation = String(process.argv[4])

calculator(a1, b2, 'multiply');