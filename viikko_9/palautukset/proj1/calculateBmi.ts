interface NumberValues {
    value1: number;
    value2: number;
}

const parseArguments = (args: string[]): NumberValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }
};

const convertToDecimal = (a : number) : number => {
    if(a < 100) {
        const _r = '0.' + a.toString();
        return Number(_r);
    }
    const _r = a.toString().substring(0, 1) + '.' + a.toString().substring(1);
    return Number(_r);
};

const calculateBmi = (a: number, b: number) : string => {
    console.log('BMI: ', a, b);
    const _h = convertToDecimal(a);
    const _r = b / (_h * _h);
    if(_r < 18.5) {
        return 'Abnormal (underweight)';
    } else if(_r < 25.0) {
        return 'Normal (healthy weight)';
    } else {
        return 'Abnormal (overweight)';
    }
};
  
try {
    //console.log(calculateBmi(180, 74));
    const { value1, value2 } = parseArguments(process.argv);
    calculateBmi(value1, value2);
} catch (error: unknown) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
}

export default calculateBmi;