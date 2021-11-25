import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloNoticias from './estiloNoticias';

function noticias({ navigation }) {

const voltar = () => {
navigation.goBack();
}

return (
<View style={estiloNoticias.container}>
<View style={estiloNoticias.borda}>

<Text style={estiloNoticias.texto}>Notícias</Text>

<TouchableOpacity style={estiloNoticias.botaoContainer} onPress={voltar}>
<Text style={estiloNoticias.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default noticias;