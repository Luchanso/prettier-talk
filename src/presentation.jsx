import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
} from 'spectacle';
import styled from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';

import TechnologyList from './TechnologyList';
import Col from './Col';
// import Container from './Container';
import iconJs from './tools_js.svg';
import iconCss from './tools_css.svg';
import iconGraphQl from './tools_gql.svg';
import iconMd from './tools_md.svg';
import iconWip from './tools_wip.svg';

// eslint-disable-next-line
require('normalize.css');

const theme = createTheme(
  {
    primary: 'rgba(20, 31, 53, .95)',
    // primary: 'rgba(240, 50, 38, .85)',
    secondary: 'white',
    tertiary: '#03A9FC',
    quarternary: 'rgba(240, 50, 38, .85)',
  },
  {
    primary: 'Roboto',
    secondary: 'Helvetica',
  },
);

const RowBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Presentation = () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={200}
    progress="bar"
    theme={theme}
  >
    <Slide transition={['zoom']} bgColor="secondary">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Prettier
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Инструмент для форматирования кода
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={6} textColor="primary" caps>
        Что за зверь и с чем его едят?
      </Heading>
      <List textColor="tertiary">
        <ListItem>Единый стиль</ListItem>
        <ListItem>Любовь к прекрасному</ListItem>
        <ListItem>Ускорение разработки</ListItem>
        <ListItem>Умеренное форматирование кода</ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={6} textColor="secondary" caps>
        Область применения
      </Heading>
      <RowBlock>
        <Col width="50%">
          <TechnologyList
            textColor="secondary"
            img={iconJs}
            list={['ES2017', 'TypeScript', 'JSX', 'JSON', 'Flow', 'Vue']}
          />
          <TechnologyList
            textColor="secondary"
            img={iconGraphQl}
            list={['GrapQL', 'GraphQL Schemas']}
          />
          <TechnologyList
            textColor="secondary"
            img={iconMd}
            list={['CommonMark', 'Github Flavored Markdown']}
          />
        </Col>
        <Col width="50%">
          <TechnologyList
            textColor="secondary"
            img={iconCss}
            list={['CSS3+', 'SCSS', 'Less', 'styled-components 💅']}
          />
          <TechnologyList
            textColor="secondary"
            img={iconWip}
            list={['Python', 'PHP', 'Swift', 'Java', 'PostgreSQL']}
            WIP
          />
        </Col>
      </RowBlock>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={1} textColor="primary" caps>
        Редакторы
      </Heading>
      <Text transition={['fade']}>Все популярные</Text>
      <Notes>
        <h4>Slide notes</h4>
        <ol>
          <li>First note</li>
          <li>Second note</li>
        </ol>
      </Notes>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Prettier самое лучше в моей жизни, что я встречал</Quote>
        <Cite>Jason Statham</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
);

export default Presentation;
