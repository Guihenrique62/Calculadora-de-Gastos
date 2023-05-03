import fetchFinances from "./fetchFinances";
import renderFinances from "./renderFinances";

export default async function handlerEditBtn(ev){
    document.querySelector('.popup').style.display = 'flex';
    const btnId = ev.target.id;
    const form = document.querySelector('.edit-form');
    const section = document.querySelector('#finances-section');

    
    form.addEventListener('submit', async (ev)=>{
        ev.preventDefault();

        document.querySelectorAll('.finance-container').forEach((element)=>{
            section.removeChild(element)
         })

        const financeData = {
            name: document.getElementById('namedit').value,
            value: document.getElementById('valuedit').value,
            date: document.getElementById('datedit').value
         }
      
        await fetch(`http://localhost:3000/finances/${btnId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(financeData)
         })
         
         form.reset()
         fetchFinances()
         document.querySelector('.popup').style.display = 'none';
    })

}
