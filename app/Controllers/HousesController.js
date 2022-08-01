import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";



function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.template)
  // console.log('drawing houses', template);
  document.getElementById('listings').innerHTML = template
}



export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    ProxyState.on('houses', saveState)
    ProxyState.on('houses', test)
    loadState()
    // _drawHouses()
  }

  viewHouses() {
    _drawHouses
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target

    let newHouse = {
      year: form.year.value
      sqft: form.sqft.value
      price: form.price.value
      


    }
  }
}