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
        setProgress((progress += 1)), 20;
        if (progress === 100) {
          setProgress(0);
          clearInterval(timeout);
        }
      });
    }

    // Linear determinate
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Linear with label</Text>
      <ProgressBar
        bgColor={'red'}
        progress={progress}
        borderRadius={5}
        label={true}
        determinate={true}
      />
      <Text>Linear determinate</Text>
      <ProgressBar
        bgColor={'#609FFF'}
        borderRadius={0}
        progress={progress}
        determinate={true}
      />
      <Text>Linear indeterminate</Text>
      <ProgressBar
        bgColor={'#609FFF'}
        borderRadius={0}
        progress={progress}
        determinate={false}
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
