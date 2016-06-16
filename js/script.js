$(document).ready(function(){
	var randomCharacters = {
	    'row1' : [
	    	Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5)
	    ],
	    'row2' : [
	    	Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5)
	    ],
	    'row3' : [
	    	Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5)
	    ],
	    'row4' : [
	    	Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5)
	    ],
	    'row5' : [
	    	Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5),
			Math.random().toString(36).substr(2, 5)
	    ]

	};


	$('#checkbox-1')
		.append(randomCharacters.row1.join(', '))
		.children()
		.attr("value", randomCharacters.row1.join('')
	);

	$('#checkbox-2')
		.append(randomCharacters.row2.join(', '))
		.children()
		.attr("value", randomCharacters.row2.join('')
	);

	$('#checkbox-3')
		.append(randomCharacters.row3.join(', '))
		.children()
		.attr("value", randomCharacters.row3.join('')
	);

	$('#checkbox-4')
		.append(randomCharacters.row4.join(', '))
		.children()
		.attr("value", randomCharacters.row4.join('')
	);

	$('#checkbox-5')
		.append(randomCharacters.row5.join(', '))
		.children()
		.attr("value", randomCharacters.row5.join('')
	);
})
