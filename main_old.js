/*
const button = document.getElementsByTagName('button')
Array.from(button).forEach(function(item){
    console.log(item.textContent)
})
const headline = document.getElementsByTagName('h1')
Array.from(headline).forEach(function(item){
    console.log(item)
})
*/

const mytable = document.getElementsByTagName('table')[0]
// console.log(mytable);

const mytablebody = mytable.getElementsByTagName('tbody')[0]
// console.log(mytablebody);

const myrow = mytablebody.getElementsByTagName('tr')[0]
// console.log(myrow);

const mycel = myrow.getElementsByTagName('td')[0]
// console.log(mycel);

// first item element of the childNodes list of mycel
myceltext = mycel.childNodes[0]
// console.log(myceltext);

mycel.innerHTML += '_test'

// checking what node type, what node name and if it has child nodes
// https://www.w3schools.com/XML/dom_nodetype.asp
console.log('Node typ: ', mytable.nodeType, 'Node name: ', mytable.nodeName, 'Has child nodes: ', mytable.hasChildNodes())
console.log('Node typ: ', mytablebody.nodeType, 'Node name: ', mytablebody.nodeName, 'Has child nodes: ', mytablebody.hasChildNodes())
console.log('Node typ: ', myrow.nodeType, 'Node name: ', myrow.nodeName, 'Has child nodes: ', myrow.hasChildNodes())
console.log('Node typ: ', mycel.nodeType, 'Node name: ', mycel.nodeName, 'Has child nodes: ', mycel.hasChildNodes())
console.log('Node typ: ', myceltext.nodeType, 'Node name: ', myceltext.nodeName, 'Has child nodes: ', myceltext.hasChildNodes())

// checking the parent nodes and parent elements and children nodes and children elements
console.log('Mytable parent element is: ', mytable.parentElement)
console.log('Mytablebody parent node is: ', mytablebody.parentNode)
console.log('Mytablebody parents parent node is: ',mytablebody.parentElement.parentElement)
console.log('Mytablebody child nodes are: ', mytablebody.childNodes)
console.log('Mytablebody child elements are: ', mytablebody.children)

// checking siblings
console.log('Mytablebody previous sibling is: ', mytablebody.previousSibling)
console.log('Mytablebody previous sibling element is: ', mytablebody.previousElementSibling)
console.log('Myrow next sibling element: ', myrow.nextElementSibling)
console.log('Mycel next sibling element: ', mycel.nextElementSibling)
console.log('Mycel previous sibling element: ', mycel.previousElementSibling)



