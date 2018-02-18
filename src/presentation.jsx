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
  Appear,
  Image,
  CodePane,
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
import makeupGun from './makeup.gif';
import badCode from './bad-code.png';
import danResist from './danResist.png';

// eslint-disable-next-line
require('normalize.css');

const exampleMatrix = `// prettier-ignore
const matrix = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
];

const matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // without-ignore
`;

const configSource = `module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none'
};`;

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
    transition={['fade']}
    transitionDuration={200}
    progress="bar"
    theme={theme}
  >
    <Slide transition={['fade']} bgColor="secondary">
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
      <Heading size={6} textColor="primary" caps>
        Редакторы
      </Heading>
      <Appear fid="1">
        <Text>Все популярные</Text>
      </Appear>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Пример
      </Heading>
      <Text>
        Тут будет пример плохого кода и хорошего
        про // eslind-disable-next-line max-len
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={6} textColor="primary" caps>
        На практике
      </Heading>
      <Image src={makeupGun} width="100vh" />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        ARUI-FEATER
      </Heading>
      <Image src={badCode} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Конфигурация
      </Heading>
      <Text>.prettierrc.js</Text>
      <CodePane
        style={{ fontSize: '50px' }}
        lang="js"
        theme="light"
        source={configSource}
      />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Image src={danResist} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        prettier-ignore
      </Heading>
      <CodePane
        textSize={24}
        lang="javascript"
        theme="light"
        source={exampleMatrix}
      />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Минусы
      </Heading>
      <Image src="" />
      <Text>
        Тут будет картинка с описанием минусов (про разную длину импортов)
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote textSize={48}>
          Prettier - форматирование кода, которое мы заслужили
        </Quote>
        <Cite>Jason Statham</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Text>Ссылки</Text>
    </Slide>
  </Deck>
);

export default Presentation;
