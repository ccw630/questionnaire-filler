cnt=0
document.querySelectorAll('.option_item').forEach(x=>{if (Math.random()>0.5){x.querySelector('label').click()}});
document.querySelectorAll('.star_item').forEach(x=>{if (Math.random()>0.5||cnt>=3){x.querySelector('label').click();cnt=0;}else{cnt++;}})