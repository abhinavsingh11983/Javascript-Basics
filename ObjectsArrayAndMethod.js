var jhon={
	fullName:'Jhon Smith',
	bill: [124,48,268,180,42],
	tips:[],
	finalValue:[],
	calctulateTips: function(){
		
		for(var i=0;i<this.bill.length;i++){
			var percentage;
			if(this.bill[i] < 50){
				percentage=.2;
			}else if (this.bill[i] >=50  && this.bill[i] <200){
				percentage=.15;
			} else{
				percentage=.1;
			}
			this.tips.push(this.bill[i]*percentage);
			this.finalValue.push(this.bill[i]*percentage+this.bill[i])
		}
	}
}

jhon.calctulateTips();
console.log(jhon);