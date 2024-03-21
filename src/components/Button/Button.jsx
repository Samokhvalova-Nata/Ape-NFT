import { MainButton } from "./Button.styled";


const Button = ({ text,  disabled=false, children }) => {
    return (
        <MainButton type="button" disabled={disabled}>
            {children}
            {/* {text} */}
        </MainButton>
    );
};

export default Button;