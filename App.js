import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import inicial from './src/views/inicial/inicial';
import sobreApp from './src/views/sobreApp/sobreApp';
import detalhes from './src/views/detalhes/detalhes';
import historia from './src/views/historia/historia';
import noticias from './src/views/noticias/noticias';

const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>

<Stack.Screen
name="inicial"
component={inicial}
options={
{ cardStyle: styles.screenInicial,
headerStyle: {backgroundColor: '#14417b'},
headerTintColor: '#FFFFFF',
}
}
/>

<Stack.Screen
name="detalhes"
component={detalhes}
options={
{ cardStyle: styles.screendetalhes,
headerStyle: {backgroundColor: '#14417b'},
headerTintColor: '#FFFFFF',
}
}
/>

<Stack.Screen
name="sobreApp"
component={sobreApp}
options={
{ cardStyle: styles.screensobreApp,
headerStyle: {backgroundColor: '#14417b'},
headerTintColor: '#FFFFFF',
}
}
/>

<Stack.Screen
name="historia"
component={historia}
options={
{ cardStyle: styles.screenhistoria,
headerStyle: {backgroundColor: '#14417b'},
headerTintColor: '#FFFFFF',
}
}
/>

<Stack.Screen
name="noticias"
component={noticias}
options={
{ cardStyle: styles.screennoticias,
headerStyle: {backgroundColor: '#14417b'},
headerTintColor: '#FFFFFF',
}
}
/>

</Stack.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
screenInicial: {
backgroundColor: '#92afd7'
},
screendetalhes: {
backgroundColor: '#d0f4ea'
},
screensobreApp: {
backgroundColor: '#d1d1d1'
},
screenhistoria: {
backgroundColor: '#d1d1d1'
},
screennoticias: {
backgroundColor: '#d1d1d1'
},
});