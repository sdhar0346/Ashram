  // let btn1 = document.getElementById("btn1");
  let scont = document.getElementById("scont");
  let ft1 = document.getElementById("site1f");
  let ft15 = document.getElementById("site15");
  let fc = document.getElementsByClassName("Fcontainer");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");
  let c1 = document.getElementById("C1");

  // var ft2 = document.getElementById("site2f");
  // var ft3 = document.getElementById("site3f");
  // var ft13 = document.getElementById("site13f");
function toggleHide1() {
  // let Osites = document.getElementsByClassName("Osites");
  let btn1 = document.getElementById("btn1");
  let scont = document.getElementById("scont");
  let ft1 = document.getElementById("site1f");
  // let fc = document.getElementsByClassName("Fcontainer");
  // let p1 = document.getElementById("ftext1");
  // let ft15 = document.getElementById("site15f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");
  // ft1.style.display = "none";
  let c1 = document.getElementById("C1");
  if (btn1 = true) {
    scont.style.display = "none";
    s15.style.display = "none";
    s18.style.display = "none";
    ft1.style.display = "block";
    // ft15.style.display = "none";
    // fc.style.display = "none";

  } 
  else 
  {
    scont.style.display = "block";
    ft1.style.display = "none";
    c1.style.display = "none";

  }
}

function toggleHide2() {
  let btn2 = document.getElementById("btn2");
  let scont = document.getElementById("scont");
  let ft2 = document.getElementById("site2f");
  let fc = document.getElementsByClassName("Fcontainer");
  let ft15 = document.getElementById("site15f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

  // let p1 = document.getElementById('psite1');
  // let p1 = document.getElementById("ftext1");
  if (btn2 =true) {
    scont.style.display = "none";
    ft2.style.display = "block";
    ft15.style.display = "none";
    s15.style.display = "none";
    s18.style.display = "none";
    
  } 
  else 
  {
    fc.style.display = "none";
    scont.style.display = "block";
    ft2.style.display = "none";
  }
}
function toggleHide3() {
  let btn3 = document.getElementById("btn3");
  let scont = document.getElementById("scont");
  let ft3 = document.getElementById("site3f");
  let fc = document.getElementsByClassName("Fcontainer");
  let ft15 = document.getElementById("site15f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

  if (btn3 =true) {
     ft15.style.display = "none";
     scont.style.display = "none";
     ft3.style.display = "block";
     s15.style.display = "none";
     s18.style.display = "none";

    } 
    else 
    {
      scont.style.display = "block";
      ft3.style.display = "none";
    }
  }
  function toggleHide4() {
    let btn4 = document.getElementById("btn4");
    let scont = document.getElementById("scont");
    let ft4 = document.getElementById("site4f");
    // let fc = document.getElementsByClassName("Fcontainer");
    // let ft15 = document.getElementById("site15f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");

    if (btn4 =true) {
    //  ft15.style.display = "none";
     scont.style.display = "none";
     ft4.style.display = "block";
     s15.style.display = "none";
     s18.style.display = "none";

    } 
    else 
    {
      scont.style.display = "block";
      ft4.style.display = "none";
    }
  }
  function toggleHide5() {
    let btn5 = document.getElementById("btn5");
    let scont = document.getElementById("scont");
    let ft5 = document.getElementById("site5f");
    let fc = document.getElementsByClassName("Fcontainer");
    let ft15 = document.getElementById("site15f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");
    if (btn5 =true) {
     s15.style.display = "none";
     s18.style.display = "none";
     ft15.style.display = "none";
     scont.style.display = "none";
     ft5.style.display = "block";

    } 
    else 
    {
      scont.style.display = "block";
      ft5.style.display = "none";
    }
  }
  function toggleHide6() {
    let btn6 = document.getElementById("btn6");
    let scont = document.getElementById("scont");
    let ft6 = document.getElementById("site6f");
    let fc = document.getElementsByClassName("Fcontainer");
    let ft15 = document.getElementById("site15f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");

    if (btn6 =true) {
     s15.style.display = "none";
     ft15.style.display = "none";
     s18.style.display = "none";
     scont.style.display = "none";
     ft6.style.display = "block";
    } 
    else 
    {
      scont.style.display = "block";
      ft6.style.display = "none";
    }
  }
  function toggleHide7() {
    let btn7 = document.getElementById("btn7");
    let scont = document.getElementById("scont");
    let ft7 = document.getElementById("site7f");
    // let fc = document.getElementsByClassName("Fcontainer");
    // let ft15 = document.getElementById("site15f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");

    if (btn7 =true) {
     s15.style.display = "none";
     s18.style.display = "none";
    //  ft15.style.display = "none";
     scont.style.display = "none";
     ft7.style.display = "block";
    } 
    else 
    {
      scont.style.display = "block";
      ft7.style.display = "none";
    }
  }
  // function toggleHide8() {
  //   let btn8 = document.getElementById("btn8");
  //   let scont = document.getElementById("scont");
  //   let ft8 = document.getElementById("site8f");
  //   // let fc = document.getElementsByClassName("Fcontainer");
  //   // let ft15 = document.getElementById("site15f");
  //   let s18 = document.getElementById("site18");

  //   if (btn8 =true) {
  //    s15.style.display = "none";
  //    s18.style.display = "none";
  //   //  ft15.style.display = "none";
  //    scont.style.display = "none";
  //    ft8.style.display = "block";
  //   } 
  //   else 
  //   {
  //     scont.style.display = "block";
  //     ft8.style.display = "none";
  //   }
  // }
  function toggleHide8() {
    let btn8 = document.getElementById("btn8");
    let scont = document.getElementById("scont");
    let ft8 = document.getElementById("site8f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");

    if (btn8 =true) {
     s15.style.display = "none";
     s18.style.display = "none";
     scont.style.display = "none";
     ft8.style.display = "block";
    } 
    else 
    {
      scont.style.display = "block";
      ft8.style.display = "none";
    }
  }
  // function toggleHide8() {
  //   let btn8 = document.getElementById("btn8");
  // let scont = document.getElementById("scont");
  // let ft8 = document.getElementById("site8f");
  // let fc = document.getElementsByClassName("Fcontainer");
  // let ft15 = document.getElementById("site15f");
  // let s15 = document.getElementById("site15");

  // if (btn8 =true) {
  //    s15.style.display = "none";
  //    ft15.style.display = "none";
  //    scont.style.display = "none";
  //    ft8.style.display = "block";
  //   } 
  //   else 
  //   {
  //     scont.style.display = "block";
  //     ft8.style.display = "none";
  //   }
  // }
  function toggleHide9() {
    let btn9 = document.getElementById("btn9");
    let scont = document.getElementById("scont");
    let ft9 = document.getElementById("site9f");
    let s15 = document.getElementById("site15");
    let s18 = document.getElementById("site18");

    if (btn9 =true) {
      s15.style.display = "none";
      s18.style.display = "none";
      scont.style.display = "none";
      ft9.style.display = "block";
    } 
    else 
    {
      scont.style.display = "block";
      ft9.style.display = "none";
  }
}
function toggleHide10() {
  let btn10 = document.getElementById("btn10");
  let scont = document.getElementById("scont");
  let ft10 = document.getElementById("site10f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");
  if (btn10 =true) {
     s15.style.display = "none";
     s18.style.display = "none";
     scont.style.display = "none";
     ft10.style.display = "block";
    } 
    else 
  {
    scont.style.display = "block";
    ft10.style.display = "none";
  }
}
function toggleHide11() {
  let btn11 = document.getElementById("btn11");
  let scont = document.getElementById("scont");
  let ft11 = document.getElementById("site11f");
  let s15 = document.getElementById("site15");

   if (btn11 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    ft11.style.display = "block";
    ft15.style.display = "none";
  } 
  else 
  {
    scont.style.display = "block";
    ft11.style.display = "none";
  }
}
function toggleHide12() {
  let btn12 = document.getElementById("btn12");
  let scont = document.getElementById("scont");
  let ft12 = document.getElementById("site12f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

  if (btn12 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    ft12.style.display = "block";
    ft15.style.display = "none";
  } 
  else 
  {
    scont.style.display = "block";
    ft12.style.display = "none";
  }
}
function toggleHide13() {
  let btn13 = document.getElementById("btn13");
  let scont = document.getElementById("scont");
  let ft13 = document.getElementById("site13f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");
   if (btn13 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    ft13.style.display = "block";
    ft15.style.display = "none";
  } 
  else 
  {
    scont.style.display = "block";
    ft13.style.display = "none";
  }
}
function toggleHide14() {
  let btn14 = document.getElementById("btn14");
  let scont = document.getElementById("scont");
  let ft14 = document.getElementById("site14f"); 
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

   if (btn14 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    ft14.style.display = "block";
    ft15.style.display = "none";
  } 
  else 
  {
    scont.style.display = "block";
    ft14.style.display = "none";
  }
}
function toggleHide16() {
  let btn16 = document.getElementById("btn15");
  let scont = document.getElementById("scont");
  let ft16 = document.getElementById("site15f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

   if (btn16 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    site15.style.display = "none";
    ft16.style.display = "block";
  } 
  else 
  {
    scont.style.display = "block";
    site15.style.display = "block";
    ft16.style.display = "none";
  }
}
function toggleHide17() {
  let btn17 = document.getElementById("btn17");
  let scont = document.getElementById("scont");
  let ft17 = document.getElementById("site17f");
  let s15 =document.getElementById("site15");
  let s18 = document.getElementById("site18");

   if (btn17 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    site15.style.display = "none";
    ft17.style.display = "block";
  } 
  else 
  {
    scont.style.display = "block";
    site15.style.display = "block";
    ft17.style.display = "none";
  }
}
function toggleHide18() {
  let btn18 = document.getElementById("btn18");
  let scont = document.getElementById("scont");
  let ft18 = document.getElementById("site18f");;
  let s15 =document.getElementById("site15");
  let s18 = document.getElementById("site16");

   if (btn18 =true) {
    s15.style.display = "none";
    scont.style.display = "none";
    s18.style.display = "none";
    ft18.style.display = "block";
  } 
  else 
  {
    scont.style.display = "block";
    site15.style.display = "block";
    ft17.style.display = "none";
  }
}
function toggleHide15() {
  let btn15 = document.getElementById("btn15");
  let scont = document.getElementById("scont");
  let s15 =document.getElementById("site15");
  let s18 = document.getElementById("site18");

   if (btn15 =true) {
    s15.style.display = "none";
    s18.style.display = "none";
    scont.style.display = "none";
    site15.style.display = "none";
    ft15.style.display = "block";
  } 
  else 
  {
    scont.style.display = "block";
    site15.style.display = "block";
    ft15.style.display = "none";
  }
}


function ffa1(){
  $('#btn1').click(function() {
  $('#ftext1').load('../texts/os-1.txt');
})
  }
function ffa2(){
  $('#btn2').click(function() {
  $('#ftext2').load('../texts/os-2.txt');
})
  }
function ffa3(){
  $('#btn3').click(function() {
  $('#ftext3').load('../texts/os-3.txt');
})
  }
function ffa4(){
  $('#btn4').click(function() {
  $('#ftext4').load('../texts/os-4.txt');
})
  }
function ffa5(){
  $('#btn5').click(function() {
  $('#ftext5').load('../texts/os-5.txt');
})
  }
function ffa6(){
  $('#btn6').click(function() {
  $('#ftext6').load('../texts/os-6.txt');
})
  }
function ffa7(){
  $('#btn7').click(function() {
  $('#ftext7').load('../texts/os-7.txt');
})
  }
function ffa8(){
  $('#btn8').click(function() {
  $('#ftext8').load('../texts/os-8.txt');
})
  }
function ffa9(){
  $('#btn9').click(function() {
  $('#ftext9').load('../texts/os-9.txt');
})
  }
function ffa10(){
  $('#btn10').click(function() {
  $('#ftext10').load('../texts/os-10.txt');
})
  }
function ffa11(){
  $('#btn11').click(function() {
  $('#ftext11').load('../texts/os-11.txt');
})
  }

  function ffa12(){
  $('#btn12').click(function() {
  $('#ftext12').load('../texts/os-12.txt');
})
  }

function ffa13(){
  $('#btn13').click(function() {
  $('#ftext13').load('../texts/os-13.txt');
})
  }

function ffa14(){
  $('#btn14').click(function() {
  $('#ftext14').load('../texts/os-14.txt');
})
  }

function back() {
  let scont = document.getElementById("scont");
  // let fcont = document.getElementById("C1");
  let ft1 = document.getElementById("site1f");
  let ft2 = document.getElementById("site2f");
  let ft3 = document.getElementById("site3f");
  let ft4 = document.getElementById("site4f");
  let ft5 = document.getElementById("site5f");
  let ft6 = document.getElementById("site6f");
  let ft7 = document.getElementById("site7f");
  let ft8 = document.getElementById("site8f");
  let ft9 = document.getElementById("site9f");
  let ft10 = document.getElementById("site10f");
  let ft11 = document.getElementById("site11f");
  let ft12 = document.getElementById("site12f");
  let ft13 = document.getElementById("site13f");
  let ft14 = document.getElementById("site14f");
  let ft15 = document.getElementById("site15f");
  let ft16 = document.getElementById("site16f");
  let ft17 = document.getElementById("site17f");
  let ft18 = document.getElementById("site18f");
  let s15 = document.getElementById("site15");
  let s18 = document.getElementById("site18");

 scont.style.display = "grid";
 s15.style.display = "grid";
 s18.style.display = "grid";
//  fcont.style.display = "none";
 ft1.style.display = "none";
 ft2.style.display = "none"; 
 ft3.style.display = "none"; 
 ft4.style.display = "none"; 
 ft5.style.display = "none"; 
 ft6.style.display = "none"; 
 ft7.style.display = "none"; 
 ft8.style.display = "none"; 
 ft9.style.display = "none"; 
 ft10.style.display = "none"; 
 ft11.style.display = "none"; 
 ft12.style.display = "none"; 
 ft13.style.display = "none"; 
 ft14.style.display = "none"; 
 ft15.style.display = "none";
 ft16.style.display = "none";
 ft17.style.display = "none";
 ft18.style.display = "none";
}

// function prev{
//   let m = document.getElementById
// }