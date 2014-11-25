//Todo o java script do jogo deve ser colocado aqui
function Exibefoto(){
     var browser=navigator.appName;
     if (browser && 'Android'){	
	     document.getElementById("idImg").style.visibility="Visible";
	 }	 
}
function Apagafoto(){
     var browser=navigator.appName;
     if (browser && 'Android'){	
	     document.getElementById("idImg").style.visibility="Hidden";
	 }
}
http://rarolabs.com.br:88/alunos.json
$(document).ready(function(){
	document.getElementById("idImg").style.visibility="Hidden";
	document.getElementById("idMini").style.visibility="Hidden";
    $.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {
    }).done(function(data) { 
        var content = '<option>Pesquisar Currículo de</option>'; 
        for(var i=0; i <data.length; i++){
		     var vrid = data[i]['nome'];			 
			 content += '<option value='+vrid+' id='+data[i]['id']+'>'+data[i]['nome']+'</option>';
        }
        $('#alunos').html(content);
    });
    $("select").change(function () {
         var str = "";
         $( "select option:selected" ).each(function() {
			document.getElementById("idMini").style.visibility="Visible";
            str = $( this ).text();		
	    	$.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {
        	}).done(function(data) {
        	    for(var i=0; i <data.length; i++){
                     var nomeAluno = data[i]['nome'] 					 
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
	$('#nome').click(function(){
	     var browser=navigator.appName;
         if (browser == 'Andriod'){		 
	        document.getElementById("idImg").style.visibility="Visible";
		 }	
	});
})