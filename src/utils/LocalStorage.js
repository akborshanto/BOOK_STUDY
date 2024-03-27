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
toast('successfullly you have save data')
  }
};
