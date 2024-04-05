import icon from '../../images/icons/sprite-icons.svg';
import { Link, Text, Title, Wrap } from './MindMapItem.styled';


export const MindMapItem = ({ text, title }) => {
  const isActive = (title === 'Learn more in mind map');

  return (
    <Wrap active={isActive}>
      {isActive && 
        <Link
          href='https://google.com'
          aria-label='Link to Google'
          target="_blank"
          rel="noopener noreferrer nofollow">
          <svg aria-label='Link to Google'>
            <use href={`${icon}#vector`}></use>
          </svg>
        </Link>
      }
      {!isActive && <Text>{text}</Text>}
      <Title>{title}</Title>
    </Wrap>
  );
};
