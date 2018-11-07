import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';

import { Form, Header, Content, Input, Label, H1, Button, Text, List, Row, Grid } from "native-base";


const TodoList = (props:Props) => {
  const { value } = props;
  // const [count, setCount] = useState(0);

  return (
    <Form>
        <Input
          style={styles.input}
          defaultValue="input"
        />
        <Button><Text>Complete</Text></Button>
    </Form>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  input: {
    width: 300,
  },
});
