import { getNumbersString } from "./utils";

interface ResultValues {
    value1: number;
    value2: number;
    value3: boolean;
    value4: number;
    value5: string;
    value6: number;
    value7: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const parseArguments3 = (args: string[], target: string): unknown => {
    const _reg = /^(^\d+$|(\d+)?\.(\d+)?)$/;
    if(args.length === 0 || args === undefined) {
        throw new Error('Provided values were not numbers!');
    }
    if(!_reg.test(target)) {
        throw new Error('Provided values were not numbers!');
    }
    const _week = getNumbersString(String(args));
    if (_week === null || _week === undefined || _week.length < 1) {
        throw new Error('Provided values were not numbers!');
    } else {
        const _o = calculateExercises(_week, Number(target));
        return {
            "periodLength": _o.value1,
            "trainingDays": _o.value2,
            "success": _o.value3,
            "rating": _o.value4,
            "ratingDescription": _o.value5,
            "target": _o.value6,
            "average": _o.value7
        };
    }
};

const getHours = (week: number[]): number[] => {
    return week.filter(_n => _n > 0);
};

const sumOfHours = (week: number[]): number => {
    if(week.length < 1) {
        return 0;
    }
    let _s = 0;
    week.forEach(_n => _s += _n);
    return _s;
};

const checkRating = (a: number, b: number) => {
    if(a > b) {
        return 3;
    } else if(a > (b/2)) {
        return 2;
    }
    return 1;
};

const getDescription = (a: number) => {
    if(a === 3) {
        return 'SUCCES';
    } else if(a === 2 ) {
        return 'not too bad but could be better';
    }
    return "FAIL";
};

export const calculateExercises = (week: number[], target: number): ResultValues => {
    const _l = week.length;
    const _hList = getHours(week);
    const _d = _hList.length;
    const _h = sumOfHours(_hList);
    const _s = _h > (target * _l) ? true : false;
    const _r = checkRating(_h, (target * _l));
    const _de = getDescription(_r);
    const _a = _h / _l;

    return {
        value1: _l,
        value2: _d,
        value3: _s,
        value4: _r,
        value5: _de,
        value6: target,
        value7: _a 
    };
};

export default parseArguments3;