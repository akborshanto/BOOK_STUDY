export const wishListLocalStorage=(singleData)=>{

    /* get data form localStorage */

const getData=localStorage.getItem('wishList')

const saveData=JSON.parse(getData)  || []

const dataAseKina=saveData.find(item => item.bookId  == singleData.bookId)

if(dataAseKina){

  alert('data already ase')
}else{


saveData.push(singleData)
const localValue=JSON.stringify(saveData)
localStorage.setItem('wishList',localValue)

}
}