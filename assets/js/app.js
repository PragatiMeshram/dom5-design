const cl = console.log;



//single selection methods :: Single Document Object

 const heading1 = document.querySelector('#heading1');
cl(heading1)
heading1.style.backgroundColor = "black";
heading1.style.color = "gold";
heading1.style.textAlign = "center";
heading1.style.padding = "15px";

const heading2 = document.querySelector('#heading2');
heading2.style.backgroundColor = "brown";
heading2.style.color = "white";
heading2.style.textAlign = "center";
heading2.style.padding = "10px";

const heading3 = document.querySelector('#heading3');
heading3.style.backgroundColor = "blueviolet";
heading3.style.color = "#fff";
heading3.style.padding = "10px";
heading3.style.textAlign = "center";

const heading4 = document.querySelector('#heading4')
heading4.style.backgroundColor = "green";
heading4.style.color = "#fff";
heading4.style.padding = "10px";
heading4.style.textAlign = "center";




let list = document.querySelector('.list-group-item');
cl(list);

 //Multiplication selection methods :: Multiplication Document Object
 

 let lists1 = Array.from(document.getElementsByClassName('list-group-item')) //html collection
 cl(lists1)

 let lists2 = [...document.getElementsByClassName('list-group-item')]  //html collection
 cl(lists2);
 for(let i = 0; i < lists2.length; i++){
    lists2[i].classList.add("text-danger")
    lists2[i].classList.add("text-weight-bold")
 }

 // document.getElementByTagName(tag:selector)>> HTMLCollection(multiple Document Object)
 
 let lists3 = [...document.getElementsByTagName('li')]
 //HTMLCollection (it is array like object but not Array)
 //it return doc Object
 cl(lists3)

 lists3.forEach((li)=>{
    li.classList.add('bg-info');
    li.classList.add('text-white');
    li.classList.add('font-weight-bold');
 })

//document.querySelectorAll('css:selector')


let lists4 = document.querySelectorAll('li')
lists4.forEach((dobj)=>{ 
    dobj.classList.add('bg-primary')
    dobj.classList.add('text-white')
    dobj.classList.add('font-weight-bold')

});

cl(lists4);

