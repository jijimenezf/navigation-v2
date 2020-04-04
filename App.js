import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to profile"
          onPress={() => navigation.navigate('Profile', {
            name: 'Custom profile header'
          })}
        />
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    const { navigation } = this.props;
    const headerStyle = {
      backgroundColor: '#f4511e',
    };
    const headerTintColor = '#fff';
    const headerTitleStyle = {
      fontWeight: 'bold'
    };
    return(
      <View style={styles.container}>
        <Text>Profile screen</Text>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({
            title: 'Updated!',
            headerStyle,
            headerTintColor,
            headerTitleStyle,
          })}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }
}

class LogoTitle extends Component {
  render() {
    return (
      <Image
        style={styles.imgLogo}
        source={require('./images/basket.png')}
      />
    )
  }
}

const Stack = createStackNavigator();

class App extends Component {
  render() {
    // Use screenOptions for custom header styles in Stack.Navigator
    const screenOptions = {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: 'My root App'}}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
