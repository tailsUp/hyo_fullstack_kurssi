const EXERCISE_PER_DAY = 1;     //Tämä luku on vedetty hatusta.

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
const parseArguments2 = (args: string[]): ResultValues => {
    const _reg = /^(^\d+$|(\d+)?\.(\d+)?)$/;
    const _l = new Array<number>();
    let ok = true;
    if(args.length === 0 || args === undefined) {
        throw new Error('Provided values were not numbers!');
    }
    for(let i=2;i<args.length;i++)
    {
        if(!_reg.test(args[i])) {
            ok = false;
        }
        else {
            _l.push(Number(args[i]));
        }
    }
    if (!ok) {
        throw new Error('Provided values were not numbers!');
    } else {
        return calculateExercises(_l);
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

const calculateExercises = (week: number[]): ResultValues => {
    const _l = week.length;
    const _hList = getHours(week);
    const _d = _hList.length;
    const _h = sumOfHours(_hList);
    const _s = _h > (EXERCISE_PER_DAY * _l) ? true : false;
    const _r = checkRating(_h, (EXERCISE_PER_DAY * _l));
    const _de = getDescription(_r);
    const _t = EXERCISE_PER_DAY;
    const _a = _h / _l;

    return {
        value1: _l,
        value2: _d,
        value3: _s,
        value4: _r,
        value5: _de,
        value6: _t,
        value7: _a 
    };
};

console.log('Training summary: ', calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));
parseArguments2(process.argv);