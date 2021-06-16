// Snack 1

// Creare un array di oggetti: Ogni oggetto descriverà una 
// bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici 
// con peso minore utilizzando destructuring e template literal


const bici = [
    {
    nome : 'x2000',
     peso : 8

    },
    {
     nome : 'fusion',
     peso : 7

    },
    {
     nome: 'sonic',
     peso : 5

    }


 ];


 let pesoMin = bici[0];

 for( let i = 1; i < bici.length; i++){
     if(bici[i].peso < pesoMin.peso){
         pesoMin = bici[i];
     }
 }
const {peso,nome}= bici;
 console.log(nome,peso);
 console.log(pesoMin)


 

 document.getElementById('container').innerHTML = 

 `
 <ul>
   <li> ${bici}</li>
 </ul>  

 `;

// Snack2 

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti,
//  falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//   Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). 
//  Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti 
//  che contengono solo nomi e falli subiti e stampiamo tutto in console.

