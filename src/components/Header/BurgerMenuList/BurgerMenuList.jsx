import { useMediaQuery } from 'react-responsive';
import icon from 'images/icons/sprite-icons.svg';
import elements from 'data/burgerMenuElements.json';
import { BurgerMenuWrap, Link, MenuButton, MenuElement } from './BurgerMenuList.styled'


export const BurgerMenuList = ({ isOpened, onClick, mobile = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <BurgerMenuWrap>
      {(!isOpened || isMobile) &&
        <MenuElement mobile={mobile}>
          <MenuButton
            type='button'
            onClick={onClick}
            mobile={mobile}>
            {!isOpened ? 'Menu' : 'Close'}
          </MenuButton>
        </MenuElement>
      }
      {elements.map(({linkHref, ariaLabel, svgHref}) =>
        <MenuElement mobile={mobile} key={ariaLabel}>
          <Link
            href={linkHref}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer nofollow"
            mobile={mobile}>
            <svg aria-label={ariaLabel}>
              <use href={`${icon}#${svgHref}`}></use>
            </svg>
          </Link>
        </MenuElement>)
      }
    </BurgerMenuWrap>
  );
};
