import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloHistoria from '../historia/estiloHistoria';
import estiloNoticias from '../noticias/estiloNoticias';
import estiloSobreApp from '../sobreApp/estiloSobreApp';
import estiloInicial from './estiloInicial';

function inicial({ navigation }) {

const abrirdetalhes = () => {
navigation.navigate('detalhes')
}

const abrirsobreApp = () => {
navigation.navigate('sobreApp')
}

const abrirhistoria = () => {
navigation.navigate('historia')
}

const abrirnoticias = () => {
navigation.navigate('noticias')
}

return(
<View style={estiloInicial.container}>
<View style={estiloInicial.borda}>

<Text style={estiloInicial.texto}>Inicial</Text>

<TouchableOpacity style={estiloSobreApp.botaoContainer} onPress={abrirsobreApp}>
<Text style={estiloSobreApp.botaoTexto}>Sobre o App</Text>
</TouchableOpacity>

<TouchableOpacity style={estiloDetalhes.botaoContainer} onPress={abrirdetalhes}>
<Text style={estiloDetalhes.botaoTexto}>Detalhes</Text>
</TouchableOpacity>

<TouchableOpacity style={estiloHistoria.botaoContainer} onPress={abrirhistoria}>
<Text style={estiloHistoria.botaoTexto}>Histórias</Text>
</TouchableOpacity>

<TouchableOpacity style={estiloNoticias.botaoContainer} onPress={abrirnoticias}>
<Text style={estiloNoticias.botaoTexto}>Notícias</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default inicial;