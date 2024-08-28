function autenticacao (){

var email = document.getElementById('email');
var password = document.getElementById('password');
var timeout = document.getElementById('timeout');

	
	if(email.value == '') {
			document.getElementById('erro').innerHTML = "Favor preencher o campo"
			setTimeout(function(delay) { 3 ;3000})
			email.focus();
			return false;
	}
	
	
	else if(email.value =='noah123@gmail.com') {
			document.getElementById('mensagem').innerHTML = "Autenticação realizada com sucesso"
			email.focus();
			return false;
	}
	else 
	{
		document.getElementById('erro').innerHTML = "Erro na Autenticação"
		email.focus();
	
    }
	 if(password.value =='123456789') {
		document.getElementById('mensagem').innerHTML = "Senha realizada com sucesso"
		email.focus();
		return false;
	}
    else{

	   document.getElementById('erro').innerHTML =("formato de password incorreto'!") 
		password.focus();
		return false;
    }
    
}	