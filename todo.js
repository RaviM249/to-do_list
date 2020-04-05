$("ul").on("click","li",function() {
$(this).toggleClass("complete");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
})
$("input").keypress(function(event){
	if(event.which===13){
		var todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> "+ todotext+ "</li>")
	}
})