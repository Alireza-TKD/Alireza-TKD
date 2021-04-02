
//whole evaluation
const checking = () =>{
     let eval = document.getElementById('eval');
     //name input validation
     let nameV = document.getElementById('floatingName').value ;
     if(nameV == '' ){
          document.getElementById('nameP').innerHTML = '* name is required';
          document.getElementById('nameP').style.color = 'red';
     }else{
          document.getElementById('nameP').innerHTML = 'Name : ' + nameV;
          document.getElementById('nameP').style.color = '#2ecc71';
     }
     //family input validation
     let familyV = document.getElementById('floatingFamily').value ;
     if(familyV == '' ){
          document.getElementById('familP').innerHTML = '* Family is required';
          document.getElementById('familP').style.color = 'red';
     }else{
          document.getElementById('familP').innerHTML = 'Family : ' + familyV;
          document.getElementById('familP').style.color = '#2ecc71'
     };
     //math input validation  
     let mathV = document.getElementById('floatingMath').value;
     if(mathV == '' || mathV > 20){
          document.getElementById('mathP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('mathP').style.color = 'red'
     }else{
          document.getElementById('mathP').style.color = '#2ecc71'
          document.getElementById('mathP').innerHTML = 'Math : ' + mathV;
     };
     //lit input validation
     let litV = document.getElementById('floatingLit').value;
     if(litV == '' || litV > 20){
          document.getElementById('litP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('litP').style.color = 'red'
     }else{
          document.getElementById('litP').style.color = '#2ecc71'
          document.getElementById('litP').innerHTML = 'Literature : ' + litV;
     };
     //English input validation
     let engV = document.getElementById('floatingEng').value;
     if(engV == '' || engV > 20){
          document.getElementById('engP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('engP').style.color = 'red'
     }else{
          document.getElementById('engP').style.color = '#2ecc71'
          document.getElementById('engP').innerHTML = 'English : ' + engV;
     };
     //physics input validation
     let phycV = document.getElementById('floatingPhyc').value;
     if(phycV == '' || phycV > 20){
          document.getElementById('phycP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('phycP').style.color = 'red'
     }else{
          document.getElementById('phycP').style.color = '#2ecc71'
          document.getElementById('phycP').innerHTML = 'physics : ' + phycV;
     };
     //sports input validation
     let sportV = document.getElementById('floatingSport').value;
     if(sportV == '' || sportV > 20){
          document.getElementById('sportP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('sportP').style.color = 'red'
     }else{
          document.getElementById('sportP').style.color = '#2ecc71'
          document.getElementById('sportP').innerHTML = 'Sports : ' + sportV;
     };
     //chemistry input validation
     let chemV = document.getElementById('floatingChem').value;
     if(chemV == '' || chemV > 20){
          document.getElementById('chemP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('chemP').style.color = 'red'
     }else{
          document.getElementById('chemP').style.color = '#2ecc71'
          document.getElementById('chemP').innerHTML = 'Chemistry : ' + chemV;
     };
      //evaluation button visible
      let formInp = document.querySelectorAll('.client');
      let x ;
      if(nameV == '' || familyV == ''  || mathV == '' || mathV > 20 || litV == '' || litV > 20 || engV == '' || engV > 20 || phycV == '' || phycV > 20 || sportV == '' || sportV > 20 || chemV == '' || chemV > 20){
          eval.style.visibility = 'hidden'
     }else{
          eval.style.visibility = 'visible'
          eval.style.animationName = 'backInUp'
          for(x in formInp){
               formInp[x].setAttribute('readonly',true)
          }

     };
};
//reseting
const rese = () =>{
     let allInp = document.querySelectorAll('.client');
     let allP = document.querySelectorAll('.checkP');
     // main visibility
     let main = document.querySelector('#main');
     main.style.visibility = 'hidden';
     
     // eval visibility
     let eval = document.querySelector('#eval');
     eval.style.animationName = 'backOutDown';
     eval.style.visibility = 'hidden';
     
     let x ;
     for(x in allP , allInp){
          allP[x].innerHTML = ''
          allInp[x].value = ''
          allInp[x].removeAttribute('readonly',true)
     } ;
};
//evaluating
const evaluation = () =>{  
     //visibility of main body
     let main = document.querySelector('#main');
     main.style.visibility = 'visible';
     main.style.animationName = 'flipInX';
     // pasting name and family
     document.getElementById('name-res').value = document.getElementById('floatingName').value
     document.getElementById('famil-res').value = document.getElementById('floatingFamily').value
     //pasting scores
     document.getElementById('math-res').value = document.getElementById('floatingMath').value
     document.getElementById('lit-res').value = document.getElementById('floatingLit').value
     document.getElementById('phyc-res').value = document.getElementById('floatingPhyc').value
     document.getElementById('eng-res').value = document.getElementById('floatingEng').value
     document.getElementById('sport-res').value = document.getElementById('floatingSport').value
     document.getElementById('chem-res').value = document.getElementById('floatingChem').value
     // pasting average
     let sum = document.getElementById('num-res').value = parseFloat(document.getElementById('math-res').value) + parseFloat(document.getElementById('lit-res').value) + parseFloat(document.getElementById('phyc-res').value) + parseFloat(document.getElementById('eng-res').value) + parseFloat(document.getElementById('sport-res').value) + parseFloat(document.getElementById('chem-res').value);
     let ave = parseFloat(sum / 6);    
     document.getElementById('num-res').value = ave
     if(ave > 12){
          document.getElementById('num-res').style.color = '#2ecc71'
     }else{
          document.getElementById('num-res').style.color = 'red'
     };
     // pasting status
     let gradeInp = document.getElementById('grade-res');
     if(ave <= 10){
          gradeInp.value = 'C'
          gradeInp.style.color = 'red'
     }else if(ave <= 16 ){
          gradeInp.value = 'B'
          gradeInp.style.color ='#f1c40f'
     }else if(ave >= 16){
          gradeInp.value ='A'
          gradeInp.style.color = '#2ecc71'
     };
     //pasting status
     let statInp = document.getElementById('status-res');
     if(ave > 12){
          statInp.value = 'Pass'
          statInp.style.color = 'green'
     }else{
          statInp.value  = 'Fail'
          statInp.style.color = 'red'
     }
     //seting attr and color
     let resInp = document.querySelectorAll('.score-res');
     let x;
     for(x in resInp){
          if(resInp[x].value <= 12 ){
               resInp[x].style.color = 'red'
          }else{
               resInp[x].style.color = '#2ecc71'
          }
     };
};
