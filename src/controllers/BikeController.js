import {bikes} from '../models/BikeModel';

export function listarBikes(){
    return bikes;
}

export function buscarBikePorId(id){
    return bikes.find(bike => bike.id === id);
}