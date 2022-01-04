

      // input

      const Language = document.getElementById('Language')
      const bookTitle = document.getElementById('BookTitle')
      const Author = document.getElementById('Author')
      const Type = document.getElementById('Type')
      const price = document.getElementById('price')
      const Description = document.getElementById('Description')
      const Cover = document.getElementById('avatar')
      const Date = document.getElementById('date')
      var lng=document.getElementById("language")
      const email = document.getElementById('email')

      // errors

      const errorElementLanguage = document.getElementById('errorr1')
      const errorElementTitle = document.getElementById('errorr2')
      const errorElementAuthor = document.getElementById('errorr3')
      const errorElementType = document.getElementById('errorr4')
      const errorElementPrice = document.getElementById('errorr5')
      const errorElementDescription = document.getElementById('errorr6')
      const errorElementCover = document.getElementById('errorr7')
      const errorElementDate = document.getElementById('errorr8')
      const errorElementEmail = document.getElementById('errorr9')




      // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000







        //   ----- Language-----

      form.addEventListener('submit', (e) => {
         if(lng.value == ""){
            errorElementLanguage.innerHTML="You must choose the Language for Book"
            
         }
 
         else{
            errorElementLanguage.innerHTML="Good"
            errorElementLanguage.style.color ="green";
         }
      })

        



 




       //   ----- Title -----  


      form.addEventListener('submit', (e) => {

         let messages = []
         if (bookTitle.value === '' || bookTitle.value === null) {
            messages.push('Title is required *')
         }
         
         

         if(bookTitle.value.length >= 30){
            messages.push('Title must be Less than 30 characters')
            
            errorElementTitle.style.color ="red";
         }


         if(messages.length > 0){
            e.preventDefault()
            errorElementTitle.innerText  = messages.join(', ')
         }
         
         else{
            errorElementTitle.innerHTML="Good"
            errorElementTitle.style.color ="green";
         }
      })






      // -------------- Author -----------



      form.addEventListener('submit', (e) => {

         let messages = []
         if (Author.value === '' || Author.value === null) {
            messages.push('Author is required *')
         }
         if(Author.value.length >= 30){
            messages.push('Author Name must be Less than 30 characters')
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementAuthor.innerText  = messages.join(', ')
         }
         else{
            errorElementAuthor.innerHTML="Good"
            errorElementAuthor.style.color ="green";
         }

      })

      







      // -------- Type  ----------

      var types = document.getElementsByClassName("Types")

      form.addEventListener('submit', (e) => {
         if (!(types[0].checked || types[1].checked || types[2].checked)){
            errorElementType.innerHTML="You must choose the Type for Book *"

         }

         else{
            errorElementType.innerHTML="Good"
            errorElementType.style.color ="green";
         }

      })











      //  ---------------- price---------


      form.addEventListener('submit', (e) => {

         let messages = []


         if (price.value === '' || price.value === null || price.value<=0) {
            messages.push('You must choose the Price for Book *')
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementPrice.innerText  = messages.join(', ')
         }
         else {
            errorElementPrice.innerHTML =("Good");
            errorElementPrice.style.color ="green";
         }
      })






      //  ---------------- email---------

      form.addEventListener("submit", (e) => {
         //   let messages = [];
             var  regexEmail= /^[a-z\d.]+@[a-z\d]+.([a-z]{2,8})(.[a-z]{2,8})?$/;
             if(email.value !=="" )
                 if(regexEmail.test(email.value)){
                     errorElementEmail.innerHTML=""
         
                 }
                 else{
                     errorElementEmail.innerHTML="please enter a correct email form "
         
         
                 }
                else{
                     errorElementEmail.innerHTML="This field is not filled out*"
         
                     }
         
         
         
         });


   

   // =======================   date   ==================




   form.addEventListener('submit', (e) => {
      if (Date.value == ""){
         errorElementDate.innerHTML =("You must choose Date For Book")
      }
      else {
         errorElementDate.innerHTML =("Good");
         errorElementDate.style.color ="green";
      }

      // let messages = []
      // if (Date.value === '' || Date.value === null) {
      //    messages.push('You must choose Date For Book  *')
      // }

      // if(messages.length > 0){
      //    e.preventDefault()
      //    errorElementDate.innerText  = messages.join(', ')
      // }
      // else

   })





   
   // =======================   ADD   ==================
  

   var selectedRow = null

function onFormSubmit()
{
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{
    var formData = {};
    formData['language'] = document.getElementById('language').value;
    formData['BookTitle'] = document.getElementById('BookTitle').value;
    formData['Author'] = document.getElementById('Author').value;
    
   //  formData['Types'] = document.getElementsByClassName('Types').value;
    formData['Types'] = document.querySelector('input[name="fav_language"]:checked').value;
      // console.log(document.querySelector('input[name="fav_language"]:checked').value);
    formData['price'] = document.getElementById('price').value;
    formData['date'] = document.getElementById('date').value;
    formData['email'] = document.getElementById('email').value;

    return formData;
}





// fffffffffffffffffffffffffffffffffffffffffffffffffff


function insertNewRecord(data)
{
    var table = document.getElementById('fruit-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.language;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.BookTitle;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Author;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Types;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.price;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.email;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<button id = 'Editt'  onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
   }



// llllllllllllllllllllllllllllllllllllllll





function resetForm()
{
    document.getElementById('language').value = '';
    document.getElementById('BookTitle').value = '';
    document.getElementById('Author').value = '';

    document.getElementsByClassName('Types').value = '';
    document.getElementById('price').value = '';
    document.getElementById('date').value = '';
    document.getElementById('email').value = '';

    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('language').value = selectedRow.cells[0].innerHTML;
    document.getElementById('BookTitle').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Author').value = selectedRow.cells[2].innerHTML;

    
    document.getElementsByClassName('Types').value = selectedRow.cells[3].innerHTML;
    document.getElementById('price').value = selectedRow.cells[4].innerHTML;
    document.getElementById('date').value = selectedRow.cells[5].innerHTML;
    document.getElementById('email').value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.language;
    selectedRow.cells[1].innerHTML = formData.BookTitle;
    selectedRow.cells[2].innerHTML = formData.Author;

    selectedRow.cells[3].innerHTML = formData.Types;
    selectedRow.cells[4].innerHTML = formData.price;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.email;
}
function onDelete(td)
{
    row = td.parentElement.parentElement;
    document.getElementById('fruit-list').deleteRow(row.rowIndex);
    resetForm();
    if(confirm('Are You Sure')){}

}

