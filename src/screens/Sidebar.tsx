import React, { Component } from 'react';
import { Content, Text, List, ListItem } from "native-base";
import { AppRegistry, Image, StatusBar } from "react-native";

const routes = ["Home", "Chat", "Profile"];

export const Sidebar = (props: any) => (
    <Content style={{ position: 'absolute', }}>
        <List>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>Home</Text>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>Sign In</Text>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>Charts</Text>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>Settings</Text>
            </ListItem>
        </List>
    </Content>
);