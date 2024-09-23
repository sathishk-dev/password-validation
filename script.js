const form = document.querySelector(".form"),
pass = document.querySelector(".pass"),
cap = document.querySelector(".capital"),
len = document.querySelector(".eight"),
special = document.querySelector(".special"),
num = document.querySelector(".num"),
list = document.querySelector('.rule');

//default the list is gray
list.classList.add("text-[gray]");

pass.addEventListener("input", ()=>{

	let val = pass.value;

	let c = /[A-Z]/.test(val); //capital check
	let l = val.length>8; //8 char check
	let s = /[!@#$%^&*(),.:":{}|<>]/.test(val); //symbol check
	let n = /[0-9]/.test(val); //number check

	//check capital letter
	if(c) success(cap);
	else error(cap);
	
	//check length
	if(l) success(len);
	else error(len);

	//check special char
	if(s) success(special);
	else error(special);

	//check number
	if(n) success(num);
	else error(num);

	//change color
	function success(rule){
		rule.classList.remove("text-[gray]");
		rule.classList.add("text-[green]");
	}

	function error(rule){
		rule.classList.remove("text-[green]");
		rule.classList.add("text-[gray]");
	}
	

});

form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let val = pass.value;
	let c = /[A-Z]/.test(val);
	let l = val.length>8;
	let s = /[!@#$%^&*(),.:":{}|<>]/.test(val);
	let n = /[0-9]/.test(val);
	if(c && l && s && n){
		alert("succesfully login");
	}
});