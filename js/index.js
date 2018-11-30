$.ajax({
	type:"get",
	url:"data.json",
	async:true,
	success:function(tex){
		console.log(tex);
	}
});