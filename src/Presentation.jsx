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
  Image,
  CodePane,
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
import makeupGun from './makeup.gif';
import badCode from './bad-code.png';
import danResist from './danResist.png';
import goodPrettier from './good-prettier.png';

import './presentation.css';

// eslint-disable-next-line
require('normalize.css');

const exampleMatrix = `// prettier-ignore
const matrix = [
  1, 2, 3,      1,      4, 9, 1,  1, 6, 7,
  4,    5,    0,  2,    5,        2,
  6,    8,   9,    3,   6, 3, 2,  3,
  6,    8,  9,      3,  6,        4,
  6, 7, 8,  9,      3,  6, 7, 8,  5,
];

// without-ignore
const matrix = [
  1,
  2,
  3,
  ...
  5
];`;

const exampleCode1 = `test('should parse nds from \`В Т.Ч. ндс 18%, 232\` cases', () => {
  expect(getNdsInfo('В Т.Ч. ндс 18%, 232')).toEqual(
      // eslint-disable-next-line max-len
      { prepend: '', ndsString: 'В Т.Ч. ндс 18%, 232', percentString: '18%', sumString: '232', append: '', mode: 2 });
});`;
const exampleCode2 = `test('should parse nds from \`В Т.Ч. ндс 18%, 232\` cases', () => {
  expect(getNdsInfo('В Т.Ч. ндс 18%, 232')).toEqual({
      prepend: '',
      ndsString: 'В Т.Ч. ндс 18%, 232',
      percentString: '18%',
      sumString: '232',
      append: '',
      mode: 2
  });
});`;

const configSource = `module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'none'
};`;

const exampleBadPrettier1 = `let foo = a => a
  ? convert(resume(dispatch))(favorites)
  : rollback(resume(dispatch))
`;
const exampleBadPrettier2 = `
let foo = a =>
  a ? convert(resume(dispatch))(favorites) : rollback(resume(dispatch))
`;

const exampleProblem1 = `
function createPayment() { // My favorite comment style
  fetch(CREATE_PAYMENT_URL); // Second comment
}
`;

const exampleProblem2 = `
function totalMoney() {
  return ((income * tax) - credits + debits);
}
`;

const exampleProblem3 = `
function createPayment() {
  // My favorite comment style
  fetch(CREATE_PAYMENT_URL); // Second comment
}
`;

const exampleProblem4 = `
function totalMoney() {
  return income * tax - credits + debits;
}
`;

const solutionProblem = `
> npm install --save prettier eslint-plugin-prettier

// eslintrc.json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
`;

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
            list={[
              'Swift',
              'Elm',
              'Ruby',
              'Python',
              'PHP',
              'Java',
              'PostgreSQL',
            ]}
            WIP
          />
        </Col>
      </RowBlock>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Пример
      </Heading>
      <Text>eslint-disable-line max-len</Text>
      <CodePane
        className="bad-code"
        margin="0 0 50px 0"
        textSize={23}
        lang="js"
        theme="light"
        source={exampleCode1}
      />
      <Notes>
        <Heading size={3} textColor="secondary">
          Prettier vs eslint
        </Heading>
        <ol>
          <li>
            max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style...
          </li>
          <li>
            no-unused-vars, no-extra-bind, no-implicit-globals,
            prefer-promise-reject-errors...
          </li>
        </ol>
      </Notes>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Пример
      </Heading>
      <Text>eslint-disable-line max-len</Text>
      <CodePane textSize={23} lang="js" theme="light" source={exampleCode2} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={6} textColor="primary" caps>
        На практике
      </Heading>
      <Image src={makeupGun} width="100vh" />
      <Text textSize="1.66rem" textColor="#d2d2d2">
        10 сезон 2 серия
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <Text textColor="secondary">Ну наверное можно сконфигурировать</Text>
      </Notes>
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
      <CodePane textSize={25} lang="js" theme="light" source={configSource} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <Text textColor="secondary">
          Ну как же так? У нас же уже есть правила и менять их в корне не
          собираемся
        </Text>
      </Notes>
      <Image src={danResist} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <Text textColor="secondary">Хитрая идея</Text>
      </Notes>
      <Heading size={6} textColor="primary" caps>
        Попытка решить проблему
      </Heading>
      <Text textSize={30}>
        <span role="img">
          Code{' '}
          <span role="img" aria-label="arrow left to right">
            ➡️
          </span>{' '}
          prettier{' '}
          <span role="img" aria-label="arrow left to right">
            ➡️
          </span>{' '}
          eslint --fix{' '}
          <span role="img" aria-label="arrow left to right">
            ➡️
          </span>{' '}
          Formatted Code{' '}
          <span role="img" aria-label="stars">
            ✨
          </span>
        </span>
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <ol>
          <li>Комментарии могут быть неправильно перенесены</li>
          <li>
            Есть правила которые линтер не может поправить (смешивание
            математических операторов)
          </li>
        </ol>
      </Notes>
      <Heading size={6} textColor="primary" caps>
        Не всё так просто
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        theme="light"
        source={exampleProblem1}
      />
      <CodePane
        textSize={20}
        lang="javascript"
        theme="light"
        source={exampleProblem3}
      />
      {/* <Image src={commentsProblem} margin="0 0 50px 0" />
      <Image src={mixedOperators} /> */}
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <ol>
          <li>Комментарии могут быть неправильно перенесены</li>
          <li>
            Есть правила которые линтер не может поправить (смешивание
            математических операторов)
          </li>
        </ol>
      </Notes>
      <Heading size={6} textColor="primary" caps>
        Не всё так просто
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        theme="light"
        source={exampleProblem2}
      />
      <CodePane
        textSize={20}
        lang="javascript"
        theme="light"
        source={exampleProblem4}
      />
      {/* <Image src={commentsProblem} margin="0 0 50px 0" />
      <Image src={mixedOperators} /> */}
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Решение
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        theme="light"
        source={solutionProblem}
      />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <Text textColor="secondary">
          Разрабы сразу бегут в сендбокс доказывать, что претиер ужасен и
          присылают мне скриншоты :D
        </Text>
      </Notes>
      <Heading size={6} textColor="primary" caps>
        Prettier{' '}
        <strike>
          гов...{' '}
          <span role="img" aria-label="crap">
            💩
          </span>
        </strike>{' '}
        плохо форматирует
      </Heading>
      <RowBlock>
        <CodePane
          textSize={20}
          lang="javascript"
          theme="light"
          source={exampleBadPrettier1}
        />
        <CodePane
          textSize={20}
          lang="javascript"
          theme="light"
          source={exampleBadPrettier2}
        />
      </RowBlock>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Notes>
        <Text textColor="secondary">
          Если prettier плохо форматирует, значит с вашим кодом что - то не
          ладное
        </Text>
      </Notes>
      <Heading size={6} textColor="primary" caps>
        Prettier хорошо форматирует{' '}
        <span role="img" aria-label="unicorne">
          🦄
        </span>
      </Heading>
      <Image src={goodPrettier} />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        prettier-ignore
      </Heading>
      <CodePane
        textSize={23}
        lang="javascript"
        theme="light"
        source={exampleMatrix}
      />
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote textSize={48}>
          Prettier - форматирование, которое мы заслужили
        </Quote>
        <Cite>Jason Statham</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary" caps>
        Спасибо за внимание
      </Heading>
      <Text margin="50px 20px 20px 20px" textColor="#1da1f2">
        twitter.com/luchanso
      </Text>
      <Text margin={20} textColor="#ef3124">
        hr.alfabank.ru
      </Text>
    </Slide>
  </Deck>
);

export default Presentation;
