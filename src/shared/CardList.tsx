import { FC } from 'react'
import { styled } from '@linaria/atomic'

import { VStack } from './Stack'
import { Heading, Paragraph } from './Text'
import { Icon } from './Icon'

interface Card {
  icon?: string
  title: string
  content: string
}

interface CardListProps {
  cards: Card[]
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <CardGrid>
      {cards.map(({ icon, title, content }) => (
        <Card icon={icon} title={title} content={content} key={title} />
      ))}
    </CardGrid>
  )
}

export const Card: FC<Card> = ({ icon, title, content }) => {
  return (
    <CardBox tabIndex={0}>
      {icon ? <CardIcon icon={icon} /> : null}
      <VStack gap="4">
        <Heading size="3" weight="bold">
          {title}
        </Heading>
        <Paragraph>{content}</Paragraph>
      </VStack>
    </CardBox>
  )
}

const CardIcon = styled(Icon)`
  font-size: 48px;
  margin-left: -12px;
  margin-right: 8px;
`

const CardBox = styled.div`
  display: inline-flex;
  background-color: var(--color-dark2);
  border-radius: 6px;
  transition: color 0.3s, padding 0.3s, background-color 0.3s;
  padding: var(--spacing-7);
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--color-mid1);
  }
  &:hover h3,
  &:focus h3 {
    color: var(--color-light);
  }

  p {
    color: var(--color-secondary);
    transition: color 0.3s;
  }

  &:hover p,
  &:focus p {
    color: var(--color-secondary);
  }

  @media all and (max-width: 768px) {
    padding: var(--spacing-5);
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: var(--spacing-4);

  @media all and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
