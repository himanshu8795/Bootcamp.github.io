const companies=[
    {name:'company 1', category :'finance',start:1981,end:2003},
    {name:'company 2', category :'finance',start:1981,end:2003},
    {name:'company 3', category :'finance',start:1981,end:2003},
    {name:'company 4', category :'finance',start:1981,end:2003},
    {name:'company 5', category :'finance',start:1981,end:2003},
    {name:'company 6', category :'finance',start:1981,end:2003},
    {name:'company 7', category :'finance',start:1981,end:2003},
    {name:'company 8', category :'finance',start:1930,end:1999}
];


const ages=[33,12,20,16,5,54,21,44,61,16,45,25,64,32];

// for(i=0;i<=companies.length;i++){
//     console.log(companies[i])
// };

//forEach------------------------------------- 

// companies.forEach(function (comp) {
//     console.log(comp);
// })

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let canDrink=[];
// for(i=0;i < ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//filter--------------------------------------

//const canDrink=ages.filter(age => age>=21);
// console.log(canDrink);





// const financeCompany = companies.filter(company => company.category==='finance');{
//     console.log(financeCompany)
// }
  

// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  



  
// //map

// const companyName= companies.map(function(company){
//     return company.name;
// });
// console.log(companyName);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//sort
// const companySort= companies.sort(function(c1,c2){
// if(c1.start > c2.start){
//     return 1;
// }else{
//     return -1;
// }
// });
// console.log(companySort);
// //reduce

// let ageSum=0;
// for(i=0;i<ages.length;i++){
//     ageSum +=ages[i]
// };
// console.log(ageSum);

const ageSum =ages.reduce((total,age) => total+age,0)
console.log(ageSum)
     
   