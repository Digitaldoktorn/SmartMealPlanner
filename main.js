const mytable = document.getElementsByTagName('table')[0]
const mytablebody = mytable.getElementsByTagName('tbody')[0]

const rowOne = mytablebody.getElementsByTagName('tr')[0]
const rowTwo = mytablebody.getElementsByTagName('tr')[1]
const rowThree = mytablebody.getElementsByTagName('tr')[2]
const rowFour = mytablebody.getElementsByTagName('tr')[3]
const rowFive = mytablebody.getElementsByTagName('tr')[4]
const rowSix = mytablebody.getElementsByTagName('tr')[5]
const rowSeven = mytablebody.getElementsByTagName('tr')[6]

const foodMonday = rowOne.getElementsByTagName('td')[0]
const foodTuesday = rowTwo.getElementsByTagName('td')[0]
const foodWednesday = rowThree.getElementsByTagName('td')[0]
const foodThursday = rowFour.getElementsByTagName('td')[0]
const foodFriday = rowFive.getElementsByTagName('td')[0]
const foodSaturday = rowSix.getElementsByTagName('td')[0]
const foodSunday = rowSeven.getElementsByTagName('td')[0]

// checking what node type, what node name and if it has child nodes
// https://www.w3schools.com/XML/dom_nodetype.asp
console.log('Node type: ', mytable.nodeType, 'Node name: ', mytable.nodeName, 'Has child nodes: ', mytable.hasChildNodes())
console.log('Node type: ', mytablebody.nodeType, 'Node name: ', mytablebody.nodeName, 'Has child nodes: ', mytablebody.hasChildNodes())
console.log('Node type: ', rowOne.nodeType, 'Node name: ', rowOne.nodeName, 'Has child nodes: ', rowOne.hasChildNodes())
console.log('Node type: ', foodMonday.nodeType, 'Node name: ', foodMonday.nodeName, 'Has child nodes: ', foodMonday.hasChildNodes())

// checking the parent nodes and parent elements and children nodes and children elements
console.log('Mytable parent element is: ', mytable.parentElement)
console.log('Mytablebody parent node is: ', mytablebody.parentNode)
console.log('Mytablebody parents parent node is: ',mytablebody.parentElement.parentElement)
console.log('Mytablebody child nodes are: ', mytablebody.childNodes)
console.log('Mytablebody child elements are: ', mytablebody.children[0].innerText)

// checking siblings
console.log('Mytablebody previous sibling is: ', mytablebody.previousSibling)
console.log('Mytablebody previous sibling element is: ', mytablebody.previousElementSibling)
console.log('rowOne next sibling element: ', rowOne.nextElementSibling)
console.log('foodMonday next sibling element: ', foodMonday.nextElementSibling)
console.log('foodMonday previous sibling element: ', foodMonday.previousElementSibling)

// selected week day
const selectMonday = document.getElementById('gridRadios_2_1')
const selectTuesday = document.getElementById('gridRadios_2_2')
const selectWednesday = document.getElementById('gridRadios_2_3')
const selectThursday = document.getElementById('gridRadios_2_4')
const selectFriday = document.getElementById('gridRadios_2_5')
const selectSaturday = document.getElementById('gridRadios_2_6')
const selectSunday = document.getElementById('gridRadios_2_7')


// fetching user input
const addMeal = document.forms['myform']
addMeal.addEventListener('submit', function(e){
    const value = addMeal.querySelector('#input-food').value;

    if(selectMonday.checked){
        foodMonday.innerHTML = value;
    }
    if(selectTuesday.checked){
        foodTuesday.innerHTML = value;
    }
    if(selectWednesday.checked){
        foodWednesday.innerHTML = value;
    }
    if(selectThursday.checked){
        foodThursday.innerHTML = value;
    }
    if(selectFriday.checked){
        foodFriday.innerHTML = value;
    }
    if(selectSaturday.checked){
        foodSaturday.innerHTML = value;
    }
    if(selectSunday.checked){
        foodSunday.innerHTML = value;
    }
    
})

const addContent = document.forms['myform']
addContent.addEventListener('submit', function(e){
    e.preventDefault()
    const value = addContent.querySelector('#input-content').value;

    if(selectMonday.checked){
        foodMonday.nextElementSibling.innerHTML = value
    }
    if(selectTuesday.checked){
        foodTuesday.nextElementSibling.innerHTML = value
    }
    if(selectWednesday.checked){
        foodWednesday.nextElementSibling.innerHTML = value
    }
    if(selectThursday.checked){
        foodThursday.nextElementSibling.innerHTML = value
    }
    if(selectFriday.checked){
        foodFriday.nextElementSibling.innerHTML = value
    }
    if(selectSaturday.checked){
        foodSaturday.nextElementSibling.innerHTML = value
    }
    if(selectSunday.checked){
        foodSunday.nextElementSibling.innerHTML = value
    }
    
})



