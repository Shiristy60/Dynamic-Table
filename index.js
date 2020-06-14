var form=document.getElementsByTagName("form");
var temp=1;
var submitBtn=document.getElementById("submit");
var updateBtn=document.getElementById("change");
var numid;
var nameid;

$("#toggle-form").on("click", function(){
	$(form).toggleClass("Main-form");
	
	$(submitBtn).removeClass("submit");
	$(updateBtn).addClass("change");
})


$("table").on("click", ".delete", function(){
	$(this).parent().remove();
	//temp--;
})

$("table").on("click", ".update", function(){
	$(form).toggleClass("Main-form");

	$(updateBtn).removeClass("change");
	$(submitBtn).addClass("submit");

	var id=$(this).attr("id");
	//console.log('Update Button ID'+id);

	numid="num"+id;
	nameid="name"+id;
	//console.log('Sno of update '+numid);
	//console.log("Name of update"+nameid);

	var numinform=document.getElementById(numid).innerText;
	var nameinform=document.getElementById(nameid).innerText;
	//console.log(numinform)

	document.querySelector("#fname").value=nameinform;
	document.querySelector("#fnum").value=numinform;

})

	$("form").on("click", "#change", function(){

		var tnum=$("#fnum").val();
		//console.log('form sno '+tnum);
		var tname=$("#fname").val();
		//console.log('form name'+tname);

		document.getElementById(nameid).innerHTML=tname;
		//console.log(tname);
		document.getElementById(numid).innerHTML=tnum;
		//console.log(tnum);

		$("#fnum").val("");
		$("#fname").val("");


		$(form).toggleClass("Main-form");
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


