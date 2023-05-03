import fetchFinances from './scripts/fetchFinances';
import postFinances from './scripts/postFinances';
import putFinances from './scripts/putFinances';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', fetchFinances())
document.getElementById('form').addEventListener('submit', postFinances)

