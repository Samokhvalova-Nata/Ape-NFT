import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { ErrorText, FormContainer, Input, InputIconWrap, InputWrap } from './Form.styled';
import icon from '../../images/icons/sprite-icons.svg';
import Button from 'components/Button/Button';


const validateUsername = (username) => {
  const usernameRegex = /^@[A-Za-z]{8}$/;
  return usernameRegex.test(username);
};

const validateWalletAddress = (address) => {
  const addressRegex = /^[A-Z0-9]{19}$/;
  return addressRegex.test(address);
};

export const Form = () => {
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [statusUsername, setStatusUsername] = useState('default');
  const [statusAddress, setStatusAddress] = useState('default');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateUsername(username)) {
      setStatusUsername('error-name');
      return;
    } else {
      setStatusUsername('filled');
    }

    if (!validateWalletAddress(walletAddress)) {
      setStatusAddress('error-address');
      return;
    } else {
      setStatusAddress('filled');
    }

    // Відправляємо дані на сервер
    // const response =
      fetch('http://example.com/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, walletAddress })
    });

    // Перевіряємо статус відповіді; Закоментовано, бо url сервера не визначено
    // if (!response.ok) {
    //   throw new Error('Помилка при відправці даних на сервер');
    // }

    setUsername('');
    setWalletAddress('');
    setStatusUsername('default');
    setStatusAddress('default');
    toast.success('Your data have been send');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrap>
        <InputIconWrap>
          <svg>
            <use href={`${icon}#discord`}></use>
          </svg>
        </InputIconWrap>
        <Input
          name="name"
          required
          placeholder='@username'
          status={statusUsername}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {statusUsername === 'error-name' && <ErrorText>Wrong discord</ErrorText>}
      </InputWrap>

      <InputWrap>
        <InputIconWrap>
          <svg>
            <use href={`${icon}#metamask`}></use>
          </svg>
        </InputIconWrap>
        <Input
          name="address"
          required
          placeholder='Wallet address'
          status={statusAddress}
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        {statusAddress === 'error-address' && <ErrorText>Wrong address</ErrorText>}
      </InputWrap>
      <Button type='submit' text='MINT'/>
    </FormContainer>
  );
};
