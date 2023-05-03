export default async function renderFinances(financesData){
   const finance = document.createElement('div')
   finance.id = `finance-${financesData.id}`

   const name = document.createElement('p')
   name.classList.add(`name-content`)
   name.textContent = financesData.name

   const value = document.createElement('p')
   value.classList.add(`value-content`)
   value.textContent = `R$ ${financesData.value}`

   const date = document.createElement('p')
   date.classList.add('date-content')
   date.textContent = financesData.date

   const editBtn = document.createElement('button')
   editBtn.textContent = 'Editar'
   editBtn.classList.add('edit-btn')

   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Excluir'
   deleteBtn.classList.add('delete-btn')

   finance.append(name,value,date,editBtn,deleteBtn)
   document.getElementById('finances-section').append(finance)
}