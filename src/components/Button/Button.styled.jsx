import styled from '@emotion/styled';

export const MainButton = styled.button`
    width: ${props => ( props.type === 'button' ? '216px' : '100%')};
    padding: 10px 0px 12px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 8px;
    background-color: ${props => ( props.type === 'button' ? 'rgba(30, 30, 30, 0.10)' : 'var(--accent-color)')};

    color: ${props => (props.type === 'button' ? 'var(--secondary-text-color)' : 'var(--primary-text-color)')};
    font-family: "Right Grotesk";
    font-weight: 900;
    font-size: 16px;
    line-height: 1.18;

    @media screen and (min-width: 768px) {
        width: 100%;
        padding: 10px 0px 12px 0px;
        border-radius: 12px;
    }

    @media screen and (min-width: 1280px) {
        padding: 16px 0px 20px 0px;
        font-size: 28px;
        line-height: 1.21;
    }

    transition: color var(--transition);
    &:hover,
    &:focus {
        color:  ${props => ( props.type === 'button' ? 'var(--primary-text-color)' : 'var(--secondary-text-color)')};
    }

`;