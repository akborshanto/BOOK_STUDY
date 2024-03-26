export const readLocalStorage=(singleData)=>{
    const savedData=JSON.parse(localStorage.getItem('read')) || [];
const dataAseKina=savedData.find(item => item.bookId == singleData.bookId)

if(dataAseKina){
 return 
}else{
alert('data already added')
  savedData.push(singleData)
const localValue=JSON.stringify(savedData)
localStorage.setItem('read',localValue)

}}


