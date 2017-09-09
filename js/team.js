$.get('js/team.json', function(res){
	console.log(res)
	output = '';
	for (var group in res) {
		output += '<h3 class="position">' + group + '</h3>';
		output += '<div class="row">';
		for (var person in res[group]) {
			output += '<div class="avator">';
			output += '<img src="' + (res[group][person].P || "img/avatar/image0.png") + '">';
			output += '<p class="name hm">' + res[group][person].N + '</p>';
			output += '</div>';
	    }
		output += '</div>';
		output += '<div class="spacing"></div>';
	}
	$('#teams').append(output);
})