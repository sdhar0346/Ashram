
ft1.style.display = 'none';

function toggleHide1(){
    let btn1 = document.getElementById('btn1');
    let scont = document.getElementById('scont');
    let ft1 = document.getElementById('site1f');
    let fc = document.getElementsByClassName('Fcontainer');
    // let p1 = document.getElementById('psite1');
    let p1 = document.getElementById('ftext1');
    ft1.style.display = 'none';

    // if(ft1.style.display !='none'){
    //     scont.style.display ='none';
    //     ft1.style.display = 'grid';
    //     // p1.style.display ='grid';
    // }
    // else{
    //     scont.style.display ='grid';
    //     ft1.style.display = 'none';
    //     // p1.style.display ='none';
    //     // fc.style.display = 'none';
    // }
   if(btn1= true){
        scont.style.display ='none';
        ft1.style.display = 'block';
   }
   else{
    scont.style.display ='block';
    ft1.style.display = 'none';
   }
}

function back(){
    let scont = document.getElementById('scont');
    let ft1 = document.getElementById('site1f');


    scont.style.display !='none';

  
   ft1.style.display = 'none';
//    ft2.style.display = 'none';
   }
