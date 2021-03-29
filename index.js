//whole evaluation
const checking = () =>{
     let eval = document.querySelector('#eval');
     let name = document.getElementById('floatingName').value
     //evaluation button visible
     eval.style.visibility = 'visible'
     eval.style.animationName = 'fadeInUp'

     //inputs check
     document.getElementById('nameP').innerHTML = 'Name : ' + document.getElementById('floatingName').value;
     document.getElementById('familP').innerHTML = 'Family : ' + document.getElementById('floatingFamily').value;
     document.getElementById('mathP').innerHTML = 'Math : ' + document.getElementById('floatingMath').value;
     document.getElementById('litP').innerHTML = 'Literature : ' + document.getElementById('floatingLit').value;
     document.getElementById('engP').innerHTML = 'English : ' + document.getElementById('floatingEng').value;
     document.getElementById('phycP').innerHTML = 'physics : ' + document.getElementById('floatingPhyc').value;
     document.getElementById('sportP').innerHTML = 'Sports : ' + document.getElementById('floatingSport').value;
     document.getElementById('chemP').innerHTML = 'Chemistry : ' + document.getElementById('floatingChem').value;
     
     //person inps check
     if(name.includes(1,2,3,4,5,6,7,8,9)){
         document.getElementById('nameP').style.color = 'red'
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
