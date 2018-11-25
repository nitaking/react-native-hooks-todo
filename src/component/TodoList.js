import React, { memo } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, ListItem, Left, Icon, Body, Right } from "native-base";

const TodoList = memo((props) => {
  const { items, onItemCheck, onItemRemove } = props;

  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.listView}
      renderItem={({ item, index }) =>
        <ListItem icon>
          <Left>
            <Icon
              type="MaterialIcons"
              style={styles.checkbox}
              name={item.checked ? "check-box" : "check-box-outline-blank"}
              onPress={() => onItemCheck(index)}
            />
          </Left>
          <Body>
          <Text>{item.todoText}</Text>
          </Body>
          <Right>
            <Icon
              type="FontAwesome"
              style={styles.icon}
              name="trash-o"
              onPress={() => onItemRemove(index)}
            />
          </Right>
        </ListItem>
      }
    />
  );
});

export default TodoList;

const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  icon: {
    color: 'grey',
  },
  checkbox: {
    color: 'grey',
    fontSize: 20,
  }
});
