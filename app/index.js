import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router'; 
import Styles from '../styles/page-styles'; 

export default function Page() {
    return (
        <View style={Styles.page}>
            <Link
              style={Styles.button}
              href={{
                pathname: "/easy",
              }} asChild
            >
              <Pressable style={Styles.button}>
                <Text style={Styles.buttonText}>Easy 12 Cards</Text>
              </Pressable>
            </Link>
        </View>
    );
};
