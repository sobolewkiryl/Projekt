todayDate = new Date();

let todayMonth = todayDate.getMonth();

let todayYear = todayDate.getFullYear();

var current = document.getElementById("mouths").value;

var days = document.getElementsByClassName('cells');

var dane = document.getElementById('data');

let mouths1 = ['Styczeń' , 'Luty' , 'Marzec' , 'Kwiecień' , 'Maj' , 'Czerwiec' , 'Lipiec' , 'Sierpień' , 'Wrzesień' , 'Październik' , 'Listopad' , 'Grudzień'];

var current1 = document.getElementById("mouths").innerHTML;

function ustawDate(){
	
	document.getElementById("mouths").innerHTML = mouths1[todayMonth] + " " + todayYear;
	
	for(var i = 0;i<mouths1.length;i++){
		
		if(current == 'Kwiecień 2020' || current == 'Czerwiec 2020' || current == 'Wrzesień 2020' || current == 'Listopad 2020'){
			
			days[30].classList.add('hiden');
			
		}else if(current !== 'Kwiecień 2020' || current !== 'Czerwiec 2020' || current !== 'Wrzesień 2020' || current !== 'Listopad 2020'){
			
			days[30].classList.remove('hiden');
			
		}
	}
}
function prev(){
	
	document.getElementById("mouths").innerHTML = mouths1[todayMonth--] + " " + todayYear;
	
	var current = document.getElementById("mouths").innerHTML;
	
	console.log(todayYear);
	
    for(var i = 0;i<mouths1.length;i++){
		if(current == 'Kwiecień ' + todayYear || current == 'Czerwiec ' + todayYear || current == 'Wrzesień ' + todayYear || current == 'Listopad ' + todayYear){
			
			days[30].classList.add('hiden');
		}else if(current == 'Styczeń ' + todayYear || current == 'Marzec ' + todayYear || current == 'Maj ' + todayYear || current == 'Lipiec ' + todayYear || current == 'Sierpień ' + todayYear || current == 'Październik ' + todayYear || current == 'Grudzień ' + todayYear){
			
			days[30].classList.remove('hiden');
			days[29].classList.remove('hiden');
			
		}if(current == 'Luty ' + todayYear){
					
			 days[30].classList.add('hiden');
			 days[29].classList.add('hiden');
					
		}
	}
		
};

function next(){
    
	document.getElementById("mouths").innerHTML = mouths1[todayMonth ++] + " " + todayYear;
	
    days = document.querySelectorAll('.cells');
	
	var current = document.getElementById("mouths").innerHTML;
	
    for(var i = 0;i<mouths1.length;i++){
		
		if(current == 'Kwiecień ' + todayYear || current == 'Czerwiec ' + todayYear || current == 'Wrzesień ' + todayYear || current == 'Listopad ' + todayYear){
			
			var days = document.querySelectorAll('.cells');
			
			days[30].classList.add('hiden');
			  
		}else if(current == 'Styczeń ' + todayYear || current == 'Marzec ' + todayYear || current == 'Maj ' + todayYear || current == 'Lipiec ' + todayYear || current == 'Sierpień ' + todayYear || current == 'Październik ' + todayYear || current == 'Grudzień ' + todayYear){
			
			days[30].classList.remove('hiden');
			days[29].classList.remove('hiden');
			
		}if(current == 'Luty ' + todayYear){
					
			 days[30].classList.add('hiden');
			 days[29].classList.add('hiden');
					
		}
	}
	
};

var move = 0;

     for(var i = 0;i<days.length;i++){
		 
		 days[i].addEventListener('click',function(event){
			 
			 console.log(move);
			 
                if(move %2 === 0){
					dane.style.display = 'block';
				}else {
					dane.style.display = 'none';
				}
				move++;
			  
			  })
	 }
	 
	 function wypisz(){
		 
		 var notatki = document.getElementById('formularz').value;
		 
		 var text = document.createTextNode(notatki);
		 
		 var ul = document.querySelector('#showcase');
		 
		 var input = document.createElement('input');
		 
		 var label = document.createElement('label');
		 
		 label.id = "opa";
			 
		 var space = document.createElement('br');
		 
		 input.type = "checkbox";
		 
		 input.id = "chkbx";
		 
		 label.innerHTML = notatki;
		 
		 ul.appendChild(label);
		 
		 label.appendChild(input);
		 
		 label.appendChild(space);
	 }
	 
	 function usun(){
		 
		 var opa = document.getElementById('opa');
		 
		 var check = document.querySelectorAll('#chkbx');
		 
		 console.log(check);
		 
		 for(i=0;i<check.length;i++){
		 			 
			   if(check[i].checked == true){
				  
                   check[i].parentNode.remove();
				   
				   try{
					   
					   
				   }catch{
					   
					   
					   
				   }
				   
		         }
		 }
		 
		 
	 }

	 	





