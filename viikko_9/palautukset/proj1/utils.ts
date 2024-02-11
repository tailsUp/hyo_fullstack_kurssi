interface NumberValues {
    value1: number;
    value2: number;
}

export const checkNumbers = (args: string[]): NumberValues => {
  if (args.length < 2) throw new Error('Not enough arguments');
  if (args.length > 2) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
      return {
        value1: Number(args[0]),
        value2: Number(args[1])
      };
    } else {
      //throw new Error('Provided values were not numbers!');
      throw new Error('malformatted parameters');
    }
};

/**
 * 
 * Funktio poistaa stringistä merkit [], ja välilyönti.
 * 
 * loppui bensa kesken paremman regex kanssa.
 * 
 * @param s : string
 * @returns array.
 */
export const getNumbersString = (s: string): number[] => {
  s = s.replace('[', '');
  s = s.replace(']', '');
  const _cleaned = s.replace(/[, ]/g, '');
  const _reg = /^(^\d+$|(\d+)?\.(\d+)?)$/;
  const _l = new Array<number>();
  for(let i=0;i<_cleaned.length;i++)
  {
      if(_reg.test(_cleaned[i])) {
        _l.push(Number(_cleaned[i]));
      }
      else {
        return [];
      }
  }
  return _l;
};