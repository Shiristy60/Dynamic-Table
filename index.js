var form=document.getElementsByTagName("form");
var temp=1;

$("#toggle-form").on("click", function(){
	$(form).toggleClass("Main-form");
})


$("table").on("click", ".delete", function(){
	$(this).parent().remove();
	temp--;
})

$("table").on("click", ".update", function(){
	$(form).toggleClass("Main-form");

	var id=$(this).attr("id");

	var numid="#num"+id;
	var nameid="#name"+id;

	var numinform=document.querySelector(numid).innerHTML;
	var nameinform=document.querySelector(nameid).innerText;

	document.querySelector("#fname").value=nameinform;
	document.querySelector("#fnum").value=numinform;

	$("form").on("click", "#change", function(){
		var tnum=$("#fnum").val();
		var tname=$("#fname").val();

		$("#fnum").val("");
		$("#fname").val("");

		document.querySelector(nameid).innerText=tname;
		console.log(tname);
		document.querySelector(numid).innerText=tnum;
		console.log(tnum);


		$(form).toggleClass("Main-form");
	})
})

$("form").on("click", "#submit", function(){
	var snum=$("#fnum").val();
	var name=$("#fname").val();

	$("#fnum").val("");
	$("#fname").val("");
	temp++;

	$("table").append("<tr><td id='num"+temp+"'class='number'>"+snum+"</td><td class='name' id='name"+temp+"'>"+name+"</td><td id="+temp+" class='update'><button class='btn btn-sm btn-primary'>Update</button></td><td class='delete'><button class='btn btn-sm btn-danger'><i class=' fa fa-trash'></i></button></td></tr>")
	$(form).toggleClass("Main-form");
})

$("form").on("click", "#cancel", function(){
	document.querySelector("#fname").value="";
	document.querySelector("#fnum").value="";
	$(form).toggleClass("Main-form");

})


