function validaCampo(){

	/*
	  getElementById - Recupera o valor do elemento que é identificado por id
	*/

	var nome = document.getElementById('campoNome');
    /*nome.value
	  if(nome.value == '') -Verifica se o campo está vazio 
	*/
	if(nome.value == '') {
			/*
			  document.getElementById('erro').innerHTML		
			  Permite atribuir o valor no elemento HTML
          
			*/
			document.getElementById('erro').innerHTML = "Favor preencher o campo"
			/*
			nome.focus()
			Permite deixar o campo em foco
			
			*/
			nome.focus();			
			return false;
	}		
	
	// validar o e-mail
	
	var email = document.getElementById('campoEmail');
	
	if(email.value == '') {
			//alert('o campo e-mail nao foi preenchido');
			document.getElementById('erro').innerHTML = "Favor preencher o campo"
			email.focus();
			return false;
	}
	
	/*
	  indexOf - É uma função que retorna -1 senão achou um caracter em um conjunto de strings
	*/
	if(email.value.indexOf('@') == -1) {
			alert("formato de e-mail incorreto!");
			email.focus();
			return false;
	}
	
	if(email.value.indexOf('.') == -1) {
		alert("formato de e-mail incorreto'!");
		email.focus();
		return false;
	}
	
	// verificar se selecionou um interesse
	
	var interesse = document.getElementById('interesse');
	
	if(interesse.value == -1) {
		alert('selecione uma área de interesse');
		interesse.focus();
		return false;
	}
		
	// verificar se digitou uma mensagem
	
	var mensagem = document.getElementById('mensagem');
	
	if(mensagem.value == '') {
		alert("Informe a mensagem");
		mensagem.focus();
		return false;
	}	
	return true;
}



function ValidaCpf(strCPF){         

    var Soma;
    var Resto;
    Soma = 0;	
    var nome = document.getElementById('campoCpfs');        
	if (strCPF == "00000000000")  return false;    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) 
	{	
	  alert("Nr cpf incorreto");		  
	  return false;
	}  
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
	{	
     alert("Nr cpf incorreto");    
	 return false;
	}
	
    return true;
}

function mascara_data(field){	
	/*
	  length - É o método que define o comprimento de uma variável ou objeto do tipo string.
	*/
	
    if(document.getElementById(field).value.length == 2){				
		document.getElementById(field).value = document.getElementById(field).value + "/";
	}					
	if (document.getElementById(field).value.length == 5){
		document.getElementById(field).value = document.getElementById(field).value + "/";			
	}
			
}	


		







 
 
 
 
 