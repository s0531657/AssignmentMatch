import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router'; 
import Styles from '../styles/page-styles'; 

export default function Page() {
    return (
        <View style={Styles.page}>
            <Text style={Styles.title}>Nate's Matching Game</Text>
            <Text style={Styles.subtitle}>Please select a difficulty:</Text>
            <Link style={Styles.button} href={{ pathname: "/easy" }} asChild>
              <Pressable style={Styles.button}>
                <Text style={Styles.buttonText}>Easy 12 Cards</Text>
              </Pressable>
            </Link>
            <Link style={Styles.button} href={{ pathname: "/medium" }} asChild>
              <Pressable style={Styles.button}>
                <Text style={Styles.buttonText}>Medium 18 Cards</Text>
              </Pressable>
            </Link>
            <Link style={Styles.button} href={{ pathname: "/hard" }} asChild>
              <Pressable style={Styles.button}>
                <Text style={Styles.buttonText}>Hard 24 Cards</Text>
              </Pressable>
            </Link>
        </View>
    );
};
