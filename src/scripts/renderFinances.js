export default async function renderFinances(financesData){
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

   const date = document.createElement('p')
   date.classList.add('date-content')
   date.textContent = financesData.date

   content.append(name,date,value)

   const containerBtn = document.createElement('div')
   containerBtn.classList.add('containerBtn')

   const editBtn = document.createElement('button')
   editBtn.textContent = 'Editar'
   editBtn.classList.add('edit-btn')

   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Excluir'
   deleteBtn.classList.add('delete-btn')

   containerBtn.append(editBtn,deleteBtn)

   finance.append(content,containerBtn)
   document.getElementById('finances-section').append(finance)
}