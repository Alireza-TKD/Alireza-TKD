//whole evaluation
const whole = () =>{
     document.querySelector('#eval').style.visibility = 'visible'
     document.querySelector('#eval').style.animationName = 'fadeInUp' 
     document.getElementById('nameP').innerHTML = 'name : ' + document.getElementById('floatingName').value;
}

//reseting
const rese = () =>{
     let allInp = document.querySelectorAll('.form-control');
     let x ;
     for(x in allInp){
          allInp[x].value = ''
     }
}
