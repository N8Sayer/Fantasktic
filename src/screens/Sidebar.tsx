import React, { Component } from 'react';
import { Content, Text, List, ListItem } from "native-base";
import { ApplicationState } from 'src/reducers';
import { connect } from 'react-redux';

export const Sidebar = ({navigation, isLoggedIn}: ISidebarProps) => (
    <Content style={{backgroundColor: 'grey', height: 100}}>
        <List style={{flexDirection: 'row', justifyContent: isLoggedIn ? 'space-between' : 'space-around'}}>
            {!isLoggedIn &&
                <ListItem
                    button
                    onPress={() => navigation.navigate("Home")}>
                    <Text>Home</Text>
                </ListItem>
            }
            {!isLoggedIn && 
                <ListItem
                    button
                    onPress={() => navigation.navigate("Sign In")}>
                    <Text>Sign In</Text>
                </ListItem>
            }
            {isLoggedIn &&
                <ListItem
                    button
                    onPress={() => navigation.navigate("Tasks")}>
                    <Text>Tasks</Text>                        
                </ListItem>
            }
            {isLoggedIn && 
                <ListItem
                    button
                    onPress={() => navigation.navigate("Charts")}>
                    <Text>Charts</Text>
                </ListItem>
            }
            {isLoggedIn &&
                <ListItem
                    button
                    onPress={() => navigation.navigate("Settings")}>
                    <Text>Settings</Text>
                </ListItem>
            }
        </List>
    </Content>
);

interface ISidebarProps {
    isLoggedIn: boolean;
    navigation?: any;
  }
  const mapStatetoProps = (state: ApplicationState) => {
    return {
      isLoggedIn: true      
    };
  };
  
  export default connect(mapStatetoProps, null)(Sidebar);