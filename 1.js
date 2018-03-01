document.querySelectorAll('.option_item').forEach(x=>{if (Math.random()>0.5){x.querySelector('label').click()}});
document.querySelectorAll('.matrix_item, .rating_area')
.forEach(x=>{
			y=x.querySelectorAll('.star_item');
			r=Math.floor(Math.random()*y.length);
			y[r].querySelector('label').click();
		});
