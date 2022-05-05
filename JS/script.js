   function toggleHide1(){
    let btn1 = document.getElementById('btn1');
    let scont = document.getElementById('scont');
   //  let fcont = document.getElementById('Fcontainer');
    let ft1 = document.getElementById('site1f');
    let ft2 = document.getElementById('site2f');
   //  let fc = document.getElementsByClassName('Fcontainer');
    // let p1 = document.getElementById('psite1');
    ft1.style.display = 'none';
   //  ft2.style.display = 'none';
   if(btn1= true){
        scont.style.display ='none';
        ft1.style.display = 'block';   
   }
   else{
    scont.style.display ='block';
   //  fcont.style.display ='none';
    ft1.style.display = 'none';
    ft2.style.display = 'none';
   }
}
function load(){
   let scont = document.getElementById('scont'); 
   let C1 = document.getElementById('C1');
   scont.style.display ='grid';
   C1.style.display = 'none';

}
function back(){
    let scont = document.getElementById('scont');
    let ft1 = document.getElementById('site1f');
    let C1 = document.getElementById('C1'); //new
   //  let ft2 = document.getElementById('site2f');
   scont.style.display ='grid';
   // C1.style.display = 'none';
   ft1.style.display = 'none';
   //  ft2.style.display = 'none';
   }
