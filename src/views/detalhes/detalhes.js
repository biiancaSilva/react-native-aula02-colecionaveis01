import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhes from './estiloDetalhes';

function detalhes({ navigation }) {

const voltar = () => {
navigation.goBack();
}

return (
<View style={estiloDetalhes.container}>
<View style={estiloDetalhes.borda}>

<Text style={estiloDetalhes.texto}>Detalhes</Text>

<TouchableOpacity style={estiloDetalhes.botaoContainer} onPress={voltar}>
<Text style={estiloDetalhes.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default detalhes;