import React, { ReactElement, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ContainerDeco } from '../../storybook/decorators';
import ProgressBar from '../../main/ProgressBar';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

function Default(): React.ReactElement {
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    // Linear with label
    // => setInterval 대신 useInterval로 고치자
    if (progress >= 0 && progress <= 100) {
      const timeout = setInterval(() => {
        setProgress((progress += 1));
        if (progress === 100) {
          setProgress(100);
          clearInterval(timeout);
        }
      }, 30);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Linear with label</Text>
      <ProgressBar
        barColor={'#609FFF'}
        bgColor={'#d0e3ff'}
        progress={progress}
        round={'round'}
        label={true}
        determinate={true}
      />
      <Text>Linear determinate</Text>
      <ProgressBar
        barColor={'#609FFF'}
        bgColor={'#d0e3ff'}
        round={'square'}
        progress={progress}
        determinate={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 60,
  },
});

export default {
  title: 'ProgressBar',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('ProgressBar', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ));
