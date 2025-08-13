import React from 'react';
import {View, Text, Flatlist, TouchableOpacity, Stylesheet} from 'react-native';
import {buscarBikePorId, listarBikes} from '../controllers/BikeController';

export default function TelaInicial({navigation}){
    const dados = listarBikes();

    const renderItem = ({item}) => (
        <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('TelaDetalhes', {bikeId : item.id})}>
         <Text style={styles.title}>{item.nome}</Text>
        </TouchableOpacity>
       
    );
    return(
        <View styles={styles.container}>
            {dados.lenght === 0 ? (
                <Text style={styles.alert}>Nenhuma bicicleta disponível</Text>
            ) : (
                <Flatlist
                data={dados}
                renderItem={renderItem}
                keyExtractor={item => itemId}/>
            )}
        </View>
    )  

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    },
    item:{
        padding: 16,
        backgroundColor: '#e0ffe0',
        marginBottom: 10,
        borderRadius: 8
    },
    title:{
        fontSize: 18
    },
    alert:{
        fontSize: 16,
        color: 'red'
    }
})