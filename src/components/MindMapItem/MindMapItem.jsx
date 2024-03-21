import React from 'react';
import { Link, Text, Title, Wrap } from './MindMapItem.styled';
import icon from '../../images/icons/sprite-icons.svg';

export const MindMapItem = ({ text, title }) => {
  const isActive = (title === 'Learn more in mind map');

  return (
    <Wrap active={isActive}>
      {isActive && 
      <Link href='https://google.com' target="_blank">
        <svg>
          <use href={`${icon}#vector`}></use>
        </svg>
      </Link>
      }
      <Text>{text}</Text>
      <Title>{title}</Title>
    </Wrap>
  );
};
