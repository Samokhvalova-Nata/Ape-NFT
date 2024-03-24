import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 248px;
  }
  
  @media screen and (min-width: 1280px) {
    width: 397px;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const InputIconWrap = styled.div`
  width: 48px;
  height: 48px;
  padding: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 12px 0px 0px 12px;
  background-color: var(--secondary-text-color);

  > svg {
    width: 24px;
    height: 24px;
    fill: #5A65F2;
  }

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 24px;
  background-color: transparent;

  border-radius: 0px 12px 12px 0px;
  transition: border var(--transition);

  color: ${props => (props.status === 'error' ? 'var(--accent-color)' : 'var(--primary-text-color)')};
  text-transform: uppercase;

  &:hover,
  &:focus {
    border: 1px solid var(--primary-text-color);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
    font-size: 12px;
    text-transform: uppercase;
  }

  &:first-of-type {
    background-color: transparent;
    border: 1px solid ${(props) => {
    switch (props.status) {
      case 'filled':
        return 'var(--primary-text-color)'; 
      case 'error-name':
        return 'var(--accent-color)'; 
      default:
        return 'var(--secondary-text-color)'; 
    }
  }};
  }

  &:last-child {
    background-color: transparent;
    border: 1px solid ${(props) => {
    switch (props.status) {
      case 'filled':
        return 'var(--primary-text-color)'; 
      case 'error-address':
        return 'var(--accent-color)'; 
      default:
        return 'var(--secondary-text-color)'; 
    }
  }};
  }

  @media screen and (min-width: 1280px) {
    height: 64px;
  }
`;

export const ErrorText = styled.p`
  color: var(--accent-color);
  text-align: right;
  font-size: 10px;
  line-height: 1.2;
  text-transform: uppercase;

  position: absolute;
  top: 48px;
  left: 134px;

  @media screen and (min-width: 768px) {
    left: 166px;
  }
  
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: 1.16;
    top: 64px;
    left: 298px;
  }
`;