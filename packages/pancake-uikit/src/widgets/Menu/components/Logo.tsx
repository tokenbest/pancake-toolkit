import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { CogIcon, LogoIcon, NoProfileAvatarIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText, PartyChainIcon,HomeIcon,PfindIcon,PhomeIcon,PstarIcon,PbagIcon,PdoctorIcon,PinfoIcon } from "../icons";
import MenuButton from "./MenuButton";
import { Text } from "../../../components/Text";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

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

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      <Text className="mobile-icon" bold fontSize="24px" color="#1FC7D4">OT</Text>
      {/* <LogoWithText className="desktop-icon" isDark={isDark} /> */}
      <PartyChainIcon  height="64px"/>
      <Text className="desktop-icon" bold fontSize="24px" color="#1FC7D4"></Text>
    </>
  );

  return (
    <Flex>
      {/* <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton> */}
      {isAbsoluteUrl ? (
        <Flex>
          <StyledLink as="a" href={href} aria-label="Partychain home page">
            {innerLogo}
          </StyledLink>
        </Flex>
      ) : (
        <Flex>
        <StyledLink to={href} aria-label="Partychain home page">
          {innerLogo}
        </StyledLink>
          <Flex style={{ marginLeft: "48px" }} verticalAlign="bottom" height="64px" alignItems="flex-end" paddingBottom="10px">
            <MenuLink to={href} aria-label="Partychain home page">
              <PhomeIcon  className="desktop-menu-icon" width="24px" height="24px" />
              {/* <NoProfileAvatarIcon className="desktop-menu-icon" width="24px" height="24px" /> */}
            </MenuLink>
            <MenuLink to={href} aria-label="Partychain home page">
              <PfindIcon className="desktop-menu-icon" width="24px" height="24px" />
            </MenuLink>
            <MenuLink to={href} aria-label="Partychain home page">
              <PstarIcon className="desktop-menu-icon" width="24px" height="24px" />
            </MenuLink>
            <MenuLink to={href} aria-label="Partychain home page">
              <PbagIcon className="desktop-menu-icon" width="24px" height="24px" />
            </MenuLink>
            <MenuLink to={href} aria-label="Partychain home page">
              <PdoctorIcon className="desktop-menu-icon" width="24px" height="24px" />
            </MenuLink>
            <MenuLink to={href} aria-label="Partychain home page">
              <PinfoIcon className="desktop-menu-icon" width="24px" height="24px" />
            </MenuLink>
          </Flex>
      </Flex>
      )}
              
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
