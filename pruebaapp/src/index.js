/* eslint-disable no-use-before-define */
// const element = document.createElement('h1')
// element.innerText = 'Hola mundo con ReactJS'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hola mundo con ReactJS</h1>
const container = document.getElementById('root')

// const name = 'Abraham Cocoletzi Zempoalteca'
const element2 = <h2>Hola {getName(user)} </h2>
const container2 = document.getElementById('root2')

const element3 = <div>lorem</div>
const container3 = document.getElementById('root3')

const user = {
  firstName: 'Abraham',
  lastName: 'Cocoletzi'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

// ReactDOM.render(__Que__, __Donde__)
ReactDOM.render(element, container)
ReactDOM.render(element2, container2)
ReactDOM.render(element3, container3)