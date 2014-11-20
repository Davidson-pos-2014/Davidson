//Todo o java script do jogo deve ser colocado aqui
$(document).ready(function(){
   document.getElementById("idImg").style.visibility="Hidden"
   $('#td1').on('click',function(){
   $(this).html('x') 
   })   
})

function Exibefoto(){	
	document.getElementById("idImg").style.visibility="Visible"
}
function Apagafoto(){	
	document.getElementById("idImg").style.visibility="Hidden"
}
