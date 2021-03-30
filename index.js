
//whole evaluation
const checking = () =>{
     let eval = document.getElementById('eval');
     //name input validation
     let nameV = document.getElementById('floatingName').value 
     if(nameV == '' ){
          document.getElementById('nameP').innerHTML = '* name is required';
          document.getElementById('nameP').style.color = 'red';
     }else{
          document.getElementById('nameP').innerHTML = 'Name : ' + nameV;
          document.getElementById('nameP').style.color = '#2ecc71'
     }
     //family input validation
     let familyV = document.getElementById('floatingFamily').value 
     if(familyV == '' ){
          document.getElementById('familP').innerHTML = '* Family is required';
          document.getElementById('familP').style.color = 'red';
     }else{
          document.getElementById('familP').innerHTML = 'Family : ' + familyV;
          document.getElementById('familP').style.color = '#2ecc71'
     }
     //math input validation  
     let mathV = document.getElementById('floatingMath').value
     if(mathV == '' || mathV > 20){
          document.getElementById('mathP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('mathP').style.color = 'red'
     }else{
          document.getElementById('mathP').style.color = '#2ecc71'
          document.getElementById('mathP').innerHTML = 'Math : ' + mathV;
     }
     //lit input validation
     let litV = document.getElementById('floatingLit').value
     if(litV == '' || litV > 20){
          document.getElementById('litP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('litP').style.color = 'red'
     }else{
          document.getElementById('litP').style.color = '#2ecc71'
          document.getElementById('litP').innerHTML = 'Literature : ' + litV;
     }
     //English input validation
     let engV = document.getElementById('floatingEng').value
     if(engV == '' || engV > 20){
          document.getElementById('engP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('engP').style.color = 'red'
     }else{
          document.getElementById('engP').style.color = '#2ecc71'
          document.getElementById('engP').innerHTML = 'English : ' + engV;
     }
     //physics input validation
     let phycV = document.getElementById('floatingPhyc').value
     if(phycV == '' || phycV > 20){
          document.getElementById('phycP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('phycP').style.color = 'red'
     }else{
          document.getElementById('phycP').style.color = '#2ecc71'
          document.getElementById('phycP').innerHTML = 'physics : ' + phycV;
     }
     //sports input validation
     let sportV = document.getElementById('floatingSport').value
     if(sportV == '' || sportV > 20){
          document.getElementById('sportP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('sportP').style.color = 'red'
     }else{
          document.getElementById('sportP').style.color = '#2ecc71'
          document.getElementById('sportP').innerHTML = 'Sports : ' + sportV;
     }
     //chemistry input validation
     let chemV = document.getElementById('floatingChem').value
     if(chemV == '' || chemV > 20){
          document.getElementById('chemP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('chemP').style.color = 'red'
     }else{
          document.getElementById('chemP').style.color = '#2ecc71'
          document.getElementById('chemP').innerHTML = 'Chemistry : ' + chemV;
     }
      //evaluation button visible
      if(nameV == '' || familyV == ''  || mathV == '' || mathV > 20 || litV == '' || litV > 20 || engV == '' || engV > 20 || phycV == '' || phycV > 20 || sportV == '' || sportV > 20 || chemV == '' || chemV > 20){
          eval.style.visibility = 'hidden'
     }else{
          eval.style.visibility = 'visible'
          eval.style.animationName = 'backInUp'
     }
}    
//reseting
const rese = () =>{
     let allInp = document.querySelectorAll('.form-control');
     let allP = document.querySelectorAll('.checkP');
     let eval = document.querySelector('#eval');
     let x ;
     for(x in allInp , allP){
          allInp[x].value = ''
          allP[x].innerHTML = ''
     } 
     eval.style.animationName = 'backOutDown'
     eval.style.visibility = 'hidden'
}
