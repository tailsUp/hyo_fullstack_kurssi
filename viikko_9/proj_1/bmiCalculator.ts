import { setNumberToDouble } from "./util";

/**
 * 
 * Funktio laskee BMI-indeksin.
 * 
 * @param h 
 * @param w 
 * @returns 
 */
export const calculateBmi = (h: number, w: number): string => {
    console.log('Lasketaan BMI');
    console.log(h, w);
    if(h === 0 || w === 0) {
        //error
    }
    const _h = setNumberToDouble(h);
    const _index = w / (2 * _h);
    return getBMIString(_index);
};

/**
 * 
 * Funktio palauttaa BMI indeksin tuloksen.
 * 
 * @param i 
 * @returns 
 */
const getBMIString = (i : number) => {
    if (i < 18.5) {
        return 'Abnormal (underweight)';
    } else if (i < 25.0) {
        return 'Normal (healthy weight)';
    }
    return 'Abnormal (overweight)';
};

//console.log(calculateBmi(180, 74));

//const a: number = Number(process.argv[2]);
//const b: number = Number(process.argv[3]);
//console.log(calculateBmi(a, b));
//multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);