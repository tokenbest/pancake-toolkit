import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, useTheme } from "styled-components";
import throttle from "lodash/throttle";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import { PmailIcon } from "../../components/Svg";
import Logo from "./components/Logo";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PfindIcon, PhomeIcon, PstarIcon, PbagIcon, PdoctorIcon, PinfoIcon } from "./icons";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  max-height: ${MENU_HEIGHT * 2}px;
  min-height: ${MENU_HEIGHT}px;
  background-color:#010C1C;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const MenuLink = styled(Link)`
  .desktop-menu-icon {
    width: 24px;
    margin-right:8px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  /* margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)}; */
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    // margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    // max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
    margin: 0 auto;
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? 28 : 28}px)`};
    margin-top: 64px;
  }

  @media screen and (max-width: 967px) {
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 12px;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .disktop-mail-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  links,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided xxx
  const homeLink = links.find((link) => link.label === "Home");

  const theme = useTheme()
  console.log(theme.mediaQueries)


  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          {
            window.innerWidth >= 840 && !(homeLink?.href ?? "/").startsWith('http') &&
          <Flex style={{ marginLeft: "48px" }} verticalAlign="bottom" height="64px" alignItems="flex-end" paddingBottom="10px">
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PhomeIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PfindIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PstarIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PbagIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PdoctorIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to="/whitepaper" aria-label="Partychain white paper">
                <PinfoIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
            </Flex>
          }
        </Flex>
        <Flex verticalAlign="bottom" alignItems="center" height="64px">
          <StyledLink to={homeLink?.href ?? "/"} aria-label="OnlyToken home page" style={{ paddingRight: "12px" }} >
            <PmailIcon width="24px" height="24px" className="disktop-mail-icon" />
          </StyledLink>
          <UserBlock account={account} login={login} logout={logout} />
        </Flex>
      </StyledNav>
      {
          window.innerWidth < 840 && !(homeLink?.href ?? "/").startsWith('http') &&
          <Flex style={{
              marginTop: "68px",
              display: 'flex',
              justifyContent: 'space-around',
              paddingLeft: '14px'
            }} 
            verticalAlign="bottom"
            height="64px"
            alignItems="flex-end"
            paddingBottom="10px"
          >
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PhomeIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PfindIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PstarIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PbagIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to={homeLink?.href ?? "/"} aria-label="Partychain home page">
                <PdoctorIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
              <MenuLink to="/whitepaper" aria-label="Partychain white paper">
                <PinfoIcon className="desktop-menu-icon" width="24px" height="24px" />
              </MenuLink>
            </Flex>
          }
      <BodyWrapper>
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
