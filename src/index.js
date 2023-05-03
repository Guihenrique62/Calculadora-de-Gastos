import fetchFinances from './scripts/fetchFinances';
import postFinances from './scripts/postFinances';
import './styles/style.css';

//gera as trasações
document.addEventListener('DOMContentLoaded', fetchFinances)

//post das transações no BD
document.getElementById('form').addEventListener('submit', postFinances)

//retira form de edição da tela
document.querySelector('.bx-x').addEventListener('click', ()=>{
   document.querySelector('.popup').style.display = 'none'
})
