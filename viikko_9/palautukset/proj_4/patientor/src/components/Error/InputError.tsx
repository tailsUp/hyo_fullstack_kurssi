import { errorStyle } from "../ComponentStyles/styles";

interface Props {
    text:   string;
}

const InputError = ( { text }: Props ) => {
    if(text.length > 0) {
        return (
            <div>
                <h2 style={errorStyle}>ERROR</h2>
                <label style={errorStyle}>{text}</label>
            </div>
        );
    }
    return null;
};

export default InputError;