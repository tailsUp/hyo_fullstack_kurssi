/**
 * 
 * Funktio ottaa vastaan numeron ja tekee siitää desimaalin. Esimerkit: 99 --> 0.99 tai 100 --> 1.00.
 * 
 * @param l - pituus.
 * @returns pituus desimaalina.
 */
export const setNumberToDouble = (l: number): number => {
    const _orig = l.toString();
    if(_orig.length > 2) {
        return Number(_orig.slice(0, 1) + '.' + _orig.slice(1));
    }
    return Number('0.' + _orig);
};

/**
 * Funktio palauttaa treenitunnit annetulta ajanjaksolta.
 * @param season array.
 * @returns number.
 */
export const getHours = (season: number[]): number => {
    let _result = 0;
    for (let i=1;i<season.length;i++) {
        _result += season[i];
    }
    /*for (const day of season) {
        _result += day;
    }*/
    return _result;
};

/**
 * Funktio palauttaa kaikki treenipäivien määrän.
 * @param season array.
 * @returns number.
 */
export const largerThenZero = (season: number[]): number => {
    let _result = 0;
    for (let i=1;i<season.length;i++) {
        _result++;
    }
    /*season.forEach((day) => {
        if(day > 0) {
            _result++;
        }
    });*/
    return _result;
};

/**
 * Vastauksen muodostamiseen käytettävä interface.
 */
export interface ExcersiceValues {
    periodLength:         number,
    trainingDays:         number,
    success:              boolean,
    rating:               number,
    ratingDescription:    string,
    target:               number,
    average:              number
}

/**
 * 
 * Funktio luo vastausolion ja palauttaa sen.
 * 
 * @param days          number.
 * @param trainingDays  number.
 * @param success       boolean.
 * @param rating        number.
 * @param description   string.
 * @param target        number.
 * @param average       number.
 * @returns             object.
 */
export const createTrainingObject = (days: number, trainingDays: number, success: boolean, rating: number, description: string, target: number, average: number): ExcersiceValues => {
    return {
        periodLength:         days,
        trainingDays:         trainingDays,
        success:              success,
        rating:               rating,
        ratingDescription:    description,
        target:               target,
        average:              average
    };
};

/**
 * Funtkio konvertoi stirng taulukon numerotaulukoksi.
 * @param season array.
 * @returns array.
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const convertToNumbers = (season: any[]): number[] => {
    const _n : number[] = [];
    for (let i=0;i<season.length;i++) {
        if(!isNaN(Number(season[i]))) {
            _n.push(Number(season[i]));
        }
    }
    /*season.forEach(day => {
        if(!isNaN(Number(day))) {
            _n.push(Number(day));
        }
    });*/
    return _n;
};

/**
 * Funktio tekee parametreistä string taulukon ja palauttaa sen.
 * @param args String.
 * @returns Array.
 */
export const getTrainingValues = (args: string[]) => {
    const _n : string[] = [];
    if(args.length < 3) {
        return _n;
    }
    for(let i=2;i<args.length;i++) {
        _n.push(args[i]);
    }
    return _n;
};

/**
 * Funktio koittaa konvertoida saamansa muuttujan numeroksi ja palauttaa sen.
 * @param n any.
 * @returns number.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertToNumber = (n: any): number => {
    console.log('Konvertoidaan: ', n);
    if(!isNaN(Number(n))) {
        return Number(n);
    }
    throw new Error('Input is not a number!');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const joinInputsToArray = (session: number[], target: string): number[]  => {
    const _a : number[] = [];
    _a.push(Number(target));
    session.forEach(_s => {
        _a.push(_s);
    });
    return _a;
};