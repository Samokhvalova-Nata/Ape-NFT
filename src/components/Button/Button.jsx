import { MainButton } from "./Button.styled";


const Button = ({ text, disabled = false, children, type='button' }) => {
    return (
        <MainButton disabled={disabled} type={type}>
            {children}
            {text}
        </MainButton>
    );
};

export default Button;