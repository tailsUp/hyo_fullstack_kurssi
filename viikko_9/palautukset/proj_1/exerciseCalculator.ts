import { getHours, largerThenZero, createTrainingObject, ExcersiceValues, convertToNumbers, getTrainingValues } from "./util";

//const TARGET = 1;

/**
 * Funktio ottaa vastaan yksittäisen numerotaulukon jonka arvojen perusteella se määrittelee miten käyttäjän harjoitukset ovat menneet.
 * @param season - array.
 * @returns Object.
 */
export const exerciseCalculator = (season: number[] | string[]): ExcersiceValues => {
    if(season.length < 1) {
        //Error
    }
    console.log(season);
    const _n : number[] = convertToNumbers(season);
    const _target = _n[0];
    console.log(_target);
    //return calculatorLogic(_n);
    const days = season.length;
    const trainigHours = getHours(_n);
    const trainingDays = largerThenZero(_n);
    const average = trainigHours / trainingDays;
    const success = compareHoursToTarget(trainigHours, (trainingDays * _target));
    const rating  = getRating(success, trainigHours, (trainingDays * _target));
    const description = getDescription(rating);
    return createTrainingObject(days, trainingDays, success, rating, description, _target, average);
};

/*const calculatorLogic = (season: number[]): ExcersiceValues => {
    const days = season.length;
    const trainigHours = getHours(season);
    const trainingDays = largerThenZero(season);
    const average = trainigHours / trainingDays;
    const success = compareHoursToTarget(trainigHours, (trainingDays * TARGET));
    const rating  = getRating(success, trainigHours, (trainingDays * TARGET));
    const description = getDescription(rating);
    return createTrainingObject(days, trainingDays, success, rating, description, TARGET, average);
}*/

/**
 * Funktio palauttaa käyttäjän 'suullisen' palautteen treenijaksosta.
 * @param rating - number.
 * @returns string.
 */
const getDescription = (rating: number): string => {
    if(rating === 3) {
        return 'well done!';
     } else if(rating == 2) {
        return 'not too bad but could be better.';
    }
    return 'could be better!';
};

/**
 * Funktio vertaa saavutettuja tunteja toivete tunteihin vastaavalla ajan jaksolla.
 * @param hours number.
 * @param limit number.
 * @returns boolean.
 */
const compareHoursToTarget = (hours: number, limit: number): boolean=> {
    if(limit <= hours) {
        return true;
    }
    return false;
};

/**
 * Funktio palauttaa arvosanan treenijaksolta.
 * @param success boolean.
 * @param hours number.
 * @param limit number.
 * @returns number.
 */
const getRating = (success: boolean, hours: number, limit: number) => {
    if(success) {
        return 3;
    }
    if(limit >= hours / 2) {
        return 2;
    }
    return 1;
};

//console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1]))
//const a: string[] = getTrainingValues(process.argv);
//console.log(exerciseCalculator(a));
exerciseCalculator(getTrainingValues(process.argv));