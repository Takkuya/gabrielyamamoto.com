import styled, { css } from "styled-components";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.landingPageBackground};
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4em;
  gap: 1em;
  padding: 1em;
  width: 100%;

  #footerIconsContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #footerCopyrightContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    p {
      color: ${(props) => props.theme.colors.paragraphText};
      font-size: 0.9em;
    }
  }

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.xs}) {
      background-color: red;
    }
  `}
`;

export const iconCSS = css`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GithubIcon = styled(AiFillGithub)`
  ${iconCSS};
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  ${iconCSS};
`;

export const EmailIcon = styled(MdEmail)`
  ${iconCSS};
`;

export const InstagramIcon = styled(AiFillInstagram)`
  ${iconCSS};
`;
