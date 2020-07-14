import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  round?: 'round' | 'square';
  barColor?: string | undefined;
  bgColor?: string | undefined;
  progress?: number | undefined;
  animation?: boolean | undefined;
  label?: boolean | undefined;
  determinate?: boolean | undefined;
  style?: StyleProp<ViewStyle>;
}

interface roundProps {
  borderRadius: number | string;
}
const handleRound = (round: string | undefined): roundProps | undefined => {
  if (round === 'round') {
    return { borderRadius: 5 };
  }
  if (round === 'square') {
    return { borderRadius: 0 };
  }
  return undefined;
};

const ProgressBar = ({
  barColor,
  bgColor,
  progress,
  round,
  label,
  determinate,
  style,
}: Props): ReactElement => {
  return (
    <Container>
      <ProgressBars style={[handleRound(round), { backgroundColor: bgColor }]}>
        <Filler
          style={[
            handleRound(round),
            { backgroundColor: barColor },
            { width: `${progress}%` },
          ]}
          progress={progress}
          determinate={determinate}></Filler>
      </ProgressBars>
      <Label
        style={[
          { display: label === true ? 'flex' : 'none' },
        ]}>{`${progress}%`}</Label>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: 50px;
  flex-direction: row;
  padding: 20px;
`;

const ProgressBars = styled.View`
  height: 10px;
  width: 100%;
  flex: 1;
`;

const Filler = styled.View`
  height: 100%;
  justify-content: center;
`;

const Label = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 9px;
  margin-left: 5px;
`;

ProgressBar.defaultProps = {
  borderRadius: 0,
  bgColor: '#d0e3ff',
  barColor: '#609FFF',
  progress: '0',
  label: 'false',
};
