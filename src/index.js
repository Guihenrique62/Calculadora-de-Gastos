import fetchFinances from './scripts/fetchFinances';
import postFinances from './scripts/postFinances';
import totalValue from './scripts/totalValue';
import './styles/style.css';

//gera as trasações
document.addEventListener('DOMContentLoaded', fetchFinances)
document.addEventListener('DOMContentLoaded', totalValue)


//post das transações no BD
document.getElementById('form').addEventListener('submit', postFinances)

//retira form de edição da tela
document.querySelector('.bx-x').addEventListener('click', ()=>{
   document.querySelector('.popup').style.display = 'none'
})


