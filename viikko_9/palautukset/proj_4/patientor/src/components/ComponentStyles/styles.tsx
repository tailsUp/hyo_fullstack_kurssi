export const tableRowStyle = {
    fontWeight: 'normal',
    border: '1px solid black',
};

export const tableStyle = {
    width: '100%',
};

export const show = (hide: boolean): string => {
    if(hide) 
    {
        return 'none';
    }
    return 'block';
};

export const whiteSpaceButtons = {
    margin: '10px',
};

export const errorStyle = {
    color: 'red',
};