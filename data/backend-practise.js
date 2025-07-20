const xhr = new XMLHttpRequest();

xhr.addEventListener('load' , () => {
  console.log(xhr.response)
})


xhr.send();  // asycnoronous
xhr.response 