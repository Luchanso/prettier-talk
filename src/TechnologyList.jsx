import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, shape, bool } from 'prop-types';

const Image = styled.img`
  align-self: flex-start;
  width: 43px;
`;

const List = styled.ul`
  color: ${props => props.textColor};
  list-style: none;
  padding-left: 10px;
  margin: 0;
  text-align: left;
  font-size: 26px;
`;

const TechnologyListItem = styled.li`
  padding: 2px 0;
`;

const Root = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: row;
`;

const WIP = styled.li`
  font-size: 26px;
  color: #c694c9;
`;

const TechnologyList = (props, context) => (
  <Root>
    <Image src={props.img} />
    <List textColor={context.styles.colors[props.textColor]}>
      {props.WIP && <WIP>Work In Progress</WIP>}
      {props.list &&
        props.list.map(item => (
          <TechnologyListItem key={item}>{item}</TechnologyListItem>
        ))}
    </List>
  </Root>
);

TechnologyList.propTypes = {
  img: string.isRequired,
  list: arrayOf(string),
  textColor: string,
  WIP: bool,
};

TechnologyList.defaultProps = {
  list: [],
  textColor: 'black',
  WIP: false,
};

TechnologyList.contextTypes = {
  styles: shape({
    colors: shape({}),
  }),
};

export default TechnologyList;
