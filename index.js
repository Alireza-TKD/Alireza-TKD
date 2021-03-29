
//whole evaluation
const checking = () =>{
     //evaluation button visible
     let eval = document.querySelector('#eval');
     eval.style.visibility = 'visible'
     eval.style.animationName = 'fadeInUp'
     //inputs check
     document.getElementById('nameP').innerHTML = 'Name : ' + document.getElementById('floatingName').value;
     document.getElementById('familP').innerHTML = 'Family : ' + document.getElementById('floatingFamily').value;
     //math input validation  
     let mathV = document.getElementById('floatingMath').value
     if(mathV.length > 2 || mathV == '' || mathV > 20){
          document.getElementById('mathP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('mathP').style.color = 'red'
     }else{
          document.getElementById('mathP').style.color = 'black'
          document.getElementById('mathP').innerHTML = 'Math : ' + mathV;
     }
     //lit input validation
     let litV = document.getElementById('floatingLit').value
     if(litV.length > 2 || litV == '' || litV > 20){
          document.getElementById('litP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('litP').style.color = 'red'
     }else{
          document.getElementById('litP').style.color = 'black'
          document.getElementById('litP').innerHTML = 'Literature : ' + litV;
     }
     //English input validation
     let engV = document.getElementById('floatingEng').value
     if(engV.length > 2 || engV == '' || engV > 20){
          document.getElementById('engP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('engP').style.color = 'red'
     }else{
          document.getElementById('engP').style.color = 'black'
          document.getElementById('engP').innerHTML = 'English : ' + engV;
     }
     //physics input validation
     let phycV = document.getElementById('floatingPhyc').value
     if(phycV.length > 2 || phycV == '' || phycV > 20){
          document.getElementById('phycP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('phycP').style.color = 'red'
     }else{
          document.getElementById('phycP').style.color = 'black'
          document.getElementById('phycP').innerHTML = 'physics : ' + phycV;
     }
     //sports input validation
     let sportV = document.getElementById('floatingSport').value
     if(sportV.length > 2 || sportV == '' || sportV > 20){
          document.getElementById('sportP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('sportP').style.color = 'red'
     }else{
          document.getElementById('sportP').style.color = 'black'
          document.getElementById('sportP').innerHTML = 'Sports : ' + sportV;
     }
     //chemistry input validation
     let chemV = document.getElementById('floatingChem').value
     if(chemV.length > 2 || chemV == '' || chemV > 20){
          document.getElementById('chemP').innerHTML = 'from 0 to 20 is valid'
          document.getElementById('chemP').style.color = 'red'
     }else{
          document.getElementById('chemP').style.color = 'black'
          document.getElementById('chemP').innerHTML = 'Chemistry : ' + chemV;
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
