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
    const value = addMeal.querySelector('#input-food').value

    if(selectMonday.checked){
        foodMonday.innerHTML = value
    }
    if(selectTuesday.checked){
        foodTuesday.innerHTML = value
    }
    if(selectWednesday.checked){
        foodWednesday.innerHTML = value
    }
    if(selectThursday.checked){
        foodThursday.innerHTML = value
    }
    if(selectFriday.checked){
        foodFriday.innerHTML = value
    }
    if(selectSaturday.checked){
        foodSaturday.innerHTML = value
    }
    if(selectSunday.checked){
        foodSunday.innerHTML = value
    }
    
})

const addContent = document.forms['myform']
addContent.addEventListener('submit', function(e){
    e.preventDefault()
    const value = addContent.querySelector('#input-content').value
    const inputFood = document.getElementById('input-food')
    const inputContent = document.getElementById('input-content')
        

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
    inputFood.value = ''
    inputContent.value = ''
    
})
