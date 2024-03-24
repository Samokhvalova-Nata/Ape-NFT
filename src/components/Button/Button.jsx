import { MainButton } from "./Button.styled";

export const Button = ({ text, disabled = false, children, type='button' }) => {
    return (
        <MainButton disabled={disabled} type={type}>
            {children}
            {text}
        </MainButton>
    );
};
