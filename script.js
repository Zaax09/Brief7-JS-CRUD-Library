

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

      // errors

      const errorElementLanguage = document.getElementById('errorr1')
      const errorElementTitle = document.getElementById('errorr2')
      const errorElementAuthor = document.getElementById('errorr3')
      const errorElementType = document.getElementById('errorr4')
      const errorElementPrice = document.getElementById('errorr5')
      const errorElementDescription = document.getElementById('errorr6')
      const errorElementCover = document.getElementById('errorr7')
      const errorElementDate = document.getElementById('errorr8')

     


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

      var types = document.getElementsByClassName("1")

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











      //  ------------  Description --------------


      form.addEventListener('submit', (e) => {

         let messages = []
         if (Description.value === '' || Description.value === null) {
            messages.push('You must write Description of Book  *')
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementDescription.innerText  = messages.join(', ')
         }
         
      else {
         errorElementDescription.innerHTML =("Good");
         errorElementDescription.style.color ="green";
      }

      })










   // =======================   cover   ==================



   form.addEventListener('submit', (e) => {

      let messages = []
      if (Cover.value === '' || Cover.value === null) {
         messages.push('You must choose Cover For Book  *')
      }

      if(messages.length > 0){
         e.preventDefault()
         errorElementCover.innerText  = messages.join(', ')
      }
      else {
         errorElementCover.innerHTML =("Good");
         errorElementCover.style.color ="green";
      }

   })












   

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

