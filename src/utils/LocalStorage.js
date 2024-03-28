import { toast } from "react-toastify";

export const readLocalStorage = (singleData,notify) => {
  const savedData = JSON.parse(localStorage.getItem("read")) || [];
  const dataAseKina = savedData.find(
    (item) => item.bookId == singleData.bookId
  );

  if (dataAseKina) {
toast.error("you have already read this book")
  } else {
    savedData.push(singleData);
    const localValue = JSON.stringify(savedData);
    localStorage.setItem("read", localValue);
toast('Book Saved Succefull')
  }
};



/* ========================== */


// export const getBook=()=>{

// let book=[]

// const storedRead=localStorage.getItem('book',book)
// if(storedRead){


//   book=JSON.parse(storedRead)
// }

// return book;

// }


// export const saveBook=(read)=>{

// let blogsBook=getBook()
// const isExist=blogsBook.find(b=> b.bookId == read.bookId)
// if(isExist){
//   return toast.error("BOOK ALREADY ADDED")
// }
// blogsBook.push(read)
// localStorage.setItem('book')
// toast.success("BOOK ADDED SUCCESS")

// }