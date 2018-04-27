document.querySelectorAll('.ui-controlgroup')
.forEach(x=>{
			y=x.querySelectorAll('.ui-radio');
			if (!y.length)return;
			r=Math.floor(Math.random()*y.length);
			y[r].click();
		});
document.querySelectorAll('.ui-checkbox').forEach(x=>{if (Math.random()>0.5){x.querySelector('.label').click()}});
document.querySelectorAll('.matrix-rating tbody [tp="d"]')
.forEach(x=>{
			y=x.querySelectorAll('td');
			r=Math.floor(Math.random()*y.length);
			y[r].click();
		});
