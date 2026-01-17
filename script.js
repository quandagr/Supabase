const url= "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/book_list";
const apikey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q"

async function createBooks(){

    event.preventDefault();

    const book_title=document.getElementById('book_title').value;
    const author_name=document.getElementById('author_name').value;
    const book_year=document.getElementById('book_year').value;

    let book = {
         book_title,
         author_name,
         book_year
    };
    console.log(book);

    const response=await fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'apikey':apikey,
        },
        body:JSON.stringify(book)
    });
    if(response.status===201){
        document.getElementById("result").innerHTML="Book added successfully!";
    } else {
    
        document.getElementById("result").innerHTML="Error adding book.";
    }
   

}

async function getBooks(){
    const response=await fetch(url,{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'apikey':apikey,
        }
    });
    const data=await response.json();
    let bookdata= document.getElementById("bookdata");
    bookdata.innerHTML = "";
    data.forEach((item) => {
        bookdata.innerHTML += `<tr>
            <td>${item.book_title}</td>
            <td>${item.author_name}</td>
            <td>${item.book_year}</td>
        </tr>`;
    }); 
   
}