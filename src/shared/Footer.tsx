import { styled } from '@linaria/atomic'

import { Text } from './Text'
import { HStack } from './Stack'

import logoUrl from '../assets/logo.png'

export const Footer = () => {
  return (
    <Section>
      <StyledFooter>
        <Text color="mid2" size="1">
          Copyright {new Date().getFullYear()} Enca Scientific.
          <br />
          All rights reserved
        </Text>
        <HStack justify="center">
          <SoMeLink
            href="https://www.linkedin.com/company/encascientific/about/"
            target="_blank"
            title="ENCA Scientific Linkedin profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SoMeLink>
        </HStack>
        <HStack justify="end">
          <Logo src={logoUrl} alt="Enca Scientific" />
        </HStack>
      </StyledFooter>
    </Section>
  )
}

const SoMeLink = styled.a`
  color: var(--color-mid2);
  outline: none;
  text-decoration: none;
  width: 44px;
  height: 44px;
  background-color: transparent;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: var(--color-dark2);
  }
`

const Logo = styled.img`
  width: 80px;
  filter: drop-shadow(1px 1px 3px var(--color-dark2));
`

const StyledFooter = styled.footer`
  display: flex;
  padding: var(--spacing-3) 0;
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid var(--color-dark2);
  gap: var(--spacing-1);
  align-items: center;
  justify-content: space-between;

  @media all and (min-width: 600px) {
    & > * {
      flex: 1;
    }
  }
`

const Section = styled.section`
  background: radial-gradient(
    circle at -20% 50%,
    #234c4d,
    #21484a,
    #1f4547,
    #1e4144,
    #1c3e41,
    #1a3a3e,
    #19373b,
    #173338,
    #163035,
    #152d31,
    #13292e,
    #12262b
  );
`
