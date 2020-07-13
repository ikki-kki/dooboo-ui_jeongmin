import React from 'react';
import styled from 'styled-components/native';

const TestContainer = styled.View`
  width: 100%;
  height: 30px;
  background-color: red;
`;

const TestText = styled.Text`
  font-size: 40px;
  color: blue;
`;

function SelectPicker(): React.ReactElement {
  return (
    <TestContainer>
      <TestText>hello Jeongmin</TestText>
    </TestContainer>
  );
}
export default SelectPicker;
