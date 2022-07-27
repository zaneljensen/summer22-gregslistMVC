import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";



export function saveState(){
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
}

export function loadState(){
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
  }
}