//Todo o java script do jogo deve ser colocado aqui
function Exibefoto(){	
	document.getElementById("idImg").style.visibility="Visible";
}
function Apagafoto(){	
	document.getElementById("idImg").style.visibility="Hidden";
}
$(document).ready(function(){
	document.getElementById("idImg").style.visibility="Hidden"; 
    $.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {
    }).done(function(data) { 
        var content = '<option>Pesquisar Currículo de</option>'; 
        for(var i=0; i <data.length; i++){
           content += '<option id='+data[i]['id']+'>'+data[i]['nome']+'</option>';
        }
        $('#alunos').html(content);
    });
    $("select").change(function () {
         var str = "";
         $( "select option:selected" ).each(function() {
            str = $( this ).text(); 				
	    	$.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {
        	}).done(function(data) {
        	    for(var i=0; i <data.length; i++){
                     var nomeAluno = data[i]['nome'] 
                     var valor  = nomeAluno.length;
                     var valor1 = str.length;					 
				     if (str == nomeAluno){
					     var content = '<p id="idLink"><a id="Valida" href="'+ data[i]['link_html']+'"> Detalhes</a></p>';
					     $('#idMini').html(data[i]['mini_curriculo']);
						 $('#idDVLink').html(content);
                         if (data[i]['link_html'] == ''){ 
						    alert('Link Detalhes indisponível no momento.');
						 }						 
					 }
        	    }
        	});
		});		
	});
})