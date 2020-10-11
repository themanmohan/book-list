 function book(book,author,isbn){
        this.name=book
        this.author=author
        this.isbn=isbn
 }


 function UI() {}
 UI.prototype.addBokkList=function(book){
        const list =document.getElementById('book-list')
        
        const row= document.createElement('tr')
        console.log(row)
        row.innerHTML=`
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row)
 }

 UI.prototype.clearField=function(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
 }

 UI.prototype.shoeError=function(msg,classname){
     const div= document.createElement('div')
     //add class
     div.className = `alert ${classname}`;
//add text
  div.appendChild(document.createTextNode(msg))
   //get parent 
   const container=document.querySelector('.container')

   const  form =document.querySelector('#book-form')
   //insert alert
   container.insertBefore(div,form)

   setTimeout(()=>{
          document.querySelector('.alert').remove()
   },3000)
 }

 UI.prototype.addBook=function(msg,classname){
         const div = document.createElement('div')
         //add class
         div.className = `alert ${classname}`;
         //add text
         div.appendChild(document.createTextNode(msg))
         //get parent 
         const container = document.querySelector('.container')

         const form = document.querySelector('#book-form')
         //insert alert
         container.insertBefore(div, form)

         setTimeout(() => {
                document.querySelector('.alert').remove()
         }, 3000)
         

 }
//delte item
UI.prototype.deleteBook=function(target){
       if(target.className==='delete'){
              target.parentElement.parentElement.remove()
       }
}
 document.getElementById('book-form').addEventListener('submit',function(e){
     const title=document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
          console.log(title,author,isbn)

       let book1 = new book(title,author,isbn)
       const ui=new UI()

       //validate
         if(title=='' || author==''){
            ui.shoeError('Please fill the field','error')
         }else{
           ui.addBokkList(book1)
         }

        
         ui.addBook('Book Addedd', 'success')

       console.log(book1)
        e.preventDefault()

        ui.clearField()
 })

 document.getElementById('book-list').addEventListener('click',function(e){
      const ui = new UI()
      ui.deleteBook(e.target)
      ui.shoeError('removed','success')
 })

