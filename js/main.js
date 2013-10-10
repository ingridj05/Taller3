jQuery(document).ready(function() {
	
	ir();
})

function ir(){
	jQuery("#ellipse").animate({
		'marginLeft': '90%',}, 2000, 'swing', devolver)
}

function devolver(){
	jQuery("#ellipse").animate({
		'marginLeft': '0%',}, 2000, 'swing', ir)
}
