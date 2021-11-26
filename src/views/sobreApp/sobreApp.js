import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSobreApp from './estiloNoticias';

function sobreApp({ navigation }) {

const voltar = () => {
navigation.goBack();
}

return (
<View style={estiloSobreApp.container}>
<View style={estiloSobreApp.borda}>

<Text style={estiloSobreApp.texto}>Sobre o App</Text>

<TouchableOpacity style={estiloSobreApp.botaoContainer} onPress={voltar}>
<Text style={estiloSobreApp.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default sobreApp;