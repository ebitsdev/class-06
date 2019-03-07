'use strict'

let elBody = document.getElementById('myBody')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let schools = []

let Hogwarts = {
    schoolName: 'Hogwarts', //Hogwarts.schoolName
    minStudents: 5,
    maxStudents: 20,
    spellsPerStudent: 2,
    spellsCastPerHour: function () {
let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
        return randomNumber * this.spellsPerStudent
    }
}

let Beauxbatons = {
    schoolName: 'Beauxbatons',
    minStudents: 40,
    maxStudents: 100,
    spellsPerStudent: 10,
    spellsCastPerHour: function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
        return randomNumber * this.spellsPerStudent
    }
}
let codePartners = {
    schoolName: 'Bethesda',
    minStudents: 6,
    maxStudents: 11,
    projectsMadePerHour: function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)

        return randomNumber * this.projectsMadePerHour
    }
}
let codePSilver = {
    schoolName: 'silver spring',
    minStudents: 8,
    maxStudents: 20,
    spellPerStudents: 10,
    spellsCastPerHour: function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
        return randomNumber * this.spellsCastPerHour
    }
}

schools.push(Hogwarts, Beauxbatons, codePartners)
// console.log(schools)
//display school name in h2
let elHogwartsTitle = document.createElement('h2')
elBody.appendChild(elHogwartsTitle)
elHogwartsTitle.innerText = Hogwarts.schoolName

//display store information into html
let elList = document.createElement('ul')
elBody.appendChild(elList)

for (let i = 0; i < hours.length; i++) {
    console.log(hours[i], 'Total number of spells', Hogwarts.spellsCastPerHour())
    let elListItem = document.createElement('li')
    elList.appendChild(elListItem)
    elListItem.innerText = hours[i] + ': ' + Hogwarts.spellsCastPerHour() + ' cast'
}

let square = {
    width: 25,
    height: 25,
    name: 'Square and rectang',
    calculateArea: function () {
    return this.width * this.height // this here refers to the square object
    }
}
square.width = 55
square.calculateArea = function () {
    return this.width - this.height
}
square.name = 'Rectangle'
console.log(square.calculateArea(), square.name)

// string concatenation and template literal
let storeData = ['Item 1', 'Item 2', 'Item 3']
console.log(storeData[0] + ' is good, but ' + storeData[2] + ' is not good.')
console.log(`${storeData[0]} is' "good", but ${storeData[2]} is not good`)