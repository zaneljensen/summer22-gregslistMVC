import { generateId } from "../Utils/generateId.js"


export class House {
    constructor({ year, sqft, price, img, description }) {
        this.id = generateId
        this.year = year
        this.sqft = sqft
        this.price = price
        this.img = img
        this.description = description
    }




    get Template() {
        return `<div class="col-4 p-3">
            <div class="bg-white elevation-2">
              <img class="img-fluid" src="${this.img}" alt="">
              <div class="p-2">
                <h4 class="text-center">${this.year} | ${this.sqft}</h4>
                <p>${this.description}</p>
                <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
              </div>
            </div>
          </div>
             `

    }





}