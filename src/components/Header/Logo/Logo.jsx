import icon from '../../../images/icons/sprite-icons.svg';
import { Link } from './Logo.styled';


export const Logo = ({mobile=false}) => {
  return (
    <Link href='/Ape-NFT' mobile={mobile}>
      <svg>
        <use href={`${icon}#logo`}></use>
      </svg>
    </Link>
  );
};
