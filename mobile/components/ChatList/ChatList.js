import React from 'react';
import ChatListItem from 'jumbosmash/components/ChatListItem/ChatListItem';
import { StyleSheet, View } from 'react-native';

export default function ChatList(props) {
  const matches = ['Manish', 'David', 'Emily'];
  return (
    <View style={styles.list}>{
      matches.map((name, i) => {
        return <ChatListItem
          navigation={props.navigation}
          matchName={name} key={i} />;
      })
    }
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginLeft: '0%',
    marginRight: '0%',
    paddingHorizontal: '0%',
    width: '100%',
  }
});