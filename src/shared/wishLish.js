import { toast } from "react-toastify"

export const wishListLocalStorage=(singleData)=>{

    /* get data form localStorage */

const getData=localStorage.getItem('wishList')

const saveData=JSON.parse(getData)  || []

const dataAseKina=saveData.find(item => item.bookId  == singleData.bookId)

if(dataAseKina){
toast.error('data already aceee')

}else{



saveData.push(singleData)
const localValue=JSON.stringify(saveData)
localStorage.setItem('wishList',localValue)
toast('data saved successfull')
}
}