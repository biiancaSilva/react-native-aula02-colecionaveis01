import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloHistoria from './estiloDetalhes';

function historia({ navigation }) {

const voltar = () => {
navigation.goBack();
}

return (
<View style={estiloHistoria.container}>
<View style={estiloHistoria.borda}>

<Text style={estiloHistoria.texto}>História</Text>

<TouchableOpacity style={estiloHistoria.botaoContainer} onPress={voltar}>
<Text style={estiloHistoria.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default historia;