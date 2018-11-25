import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Body, Title, Content } from "native-base";

const Layout = memo((props) => {
  const { children } = props;

  return (
    <Container>
      <Header>
        <Body>
          <Title>Hooks Todo List</Title>
        </Body>
      </Header>
      <View style={styles.container}>
      <Content style={styles.content}>
      {children}
      </Content>
      </View>
    </Container>
  );
});

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 350,
  },
});
