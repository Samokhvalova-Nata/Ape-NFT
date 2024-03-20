import styled from '@emotion/styled';

export const MainButton = styled.button`
    border: 0;
    border-radius: 8px;
    width: 216px;
    padding: 10px 0px 12px 0px;
    background-color: rgba(30, 30, 30, 0.10);

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--secondary-text-color);
    font-family: "Right Grotesk";
    font-weight: 900;
    line-height: 1.18;
    font-size: 16px;

    // opacity: ${props => ( props.disabled ? 0.3 : 1)};

    @media screen and (min-width: 768px) {
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        font-size: 28px;
        line-height: 1.21;
    }

    transition: color var(--transition);
    &:hover,
    &:focus {
        color: var(--primary-text-color);
    }

`;