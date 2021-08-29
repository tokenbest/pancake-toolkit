import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { PartyChainIcon } from "../icons";
// import { Text } from "../../../components/Text";

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

  .desktop-icon {
    @media screen and (min-width: 360px) and (max-width: 375px) {
      width: 135px;
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



const Logo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" />
      <Text className="mobile-icon" bold fontSize="24px" color="#1FC7D4">PartyChain</Text> */}
      {/* <LogoWithText className="desktop-icon" isDark={isDark} /> */}
      <PartyChainIcon className="desktop-icon" height="60px" />
      {/* <Text className="desktop-icon" bold fontSize="24px" color="#1FC7D4"></Text> */}
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
        <Flex >
          <StyledLink to={href} aria-label="Partychain home page">
            {innerLogo}
          </StyledLink>
        </Flex>
      )}

    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
