import React from 'react';
import styled from 'styled-components/native';

const FlexContiner = styled.View<{
  direction?: string;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${(props: any) => props.direction || 'column'};
  justify-content: ${(props: any) => props.justify || 'flex-start'};
  align-items: ${(props: any) => props.align || 'flex-start'};
  flex-grow: 1;
  background-color: 'red';
  border-style: 'solid';
  border-color: 'red';
  border-width: '5';
  margin: 40px;
`;
type FlexProps = {
  children: any;
  direction?: string;
  justify?: string;
  align?: string;
};

const Flex = (props: FlexProps) => {
  const {children, ...rest} = props;
  return <FlexContiner {...rest}>{children}</FlexContiner>;
};
export default Flex;
