import React, { memo }  from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Item, Icon } from 'native-base';

const AddTodoList = memo((props) => {
  const { inputValue, changeInput, onIconPress } = props;

  return (
    <View style={styles.container}>
      <Item success>
        <Input
          placeholder='Input todo...'
          value={inputValue}
          onChange={changeInput}
          onChangeText={props.onInputKeyPress}
        />

        <Icon type="Feather" name='plus' onPress={onIconPress} />
      </Item>
    </View>
  );
});

export default AddTodoList;

const styles = StyleSheet.create({
  container: {
  },
});
