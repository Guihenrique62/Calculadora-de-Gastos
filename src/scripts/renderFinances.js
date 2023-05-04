import handlerEditBtn from "./handlerEditBtn"
import totalValue from "./totalValue"

export default async function renderFinances(financesData){
   const valueData = parseFloat(financesData.value)

   const finance = document.createElement('div')
   finance.id = `finance-${financesData.id}`
   finance.classList.add('finance-container')

   const content = document.createElement('div')
   content.classList.add('finance-content')

   
   const name = document.createElement('p')
   name.classList.add(`name-content`)
   name.textContent = financesData.name

   const value = document.createElement('p')
   value.classList.add(`value-content`)
   value.textContent = `R$ ${financesData.value}`

   if(valueData >= 0){
      value.classList.add('positive')
   }else{
      value.classList.add('negative')
   }

   const date = document.createElement('p')
   date.classList.add('date-content')
   date.textContent = financesData.date

   content.append(name,date,value)

   const containerBtn = document.createElement('div')
   containerBtn.classList.add('containerBtn')

   const editBtn = document.createElement('button')
   editBtn.textContent = 'Editar'
   editBtn.classList.add('edit-btn')
   editBtn.id = financesData.id
   editBtn.addEventListener('click', handlerEditBtn)

   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Excluir'
   deleteBtn.classList.add('delete-btn')

   containerBtn.append(editBtn,deleteBtn)

   finance.append(content,containerBtn)
   document.getElementById('finances-section').append(finance)
}