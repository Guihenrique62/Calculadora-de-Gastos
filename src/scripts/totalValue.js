export default async function totalValue(){
    const resposta = await fetch(`http://localhost:3000/finances`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         })
    const savedFinance = await resposta.json()
    
    console.log(savedFinance)
    for(let i = 0;i<savedFinance.length;i++){
        const sum = 0
        sum += (savedFinance[i].value)
    }
}