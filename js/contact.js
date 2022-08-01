// console.log('hay');

$(document).ready(function(){
    // Start Nav
    $(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 100){
			$('.navbar').addClass('navmenus');
			$('.restarts').removeClass('d-none');
		}else{
			$(".navbar").removeClass('navmenus');
			$('.restarts').addClass('d-none');
		} 
	});
    

    // End Nav


	
     //for restart button

	 $(".restarts").click(function(){
		$(window).scrollTop(0);
	 });

});

// Start Footer Selection
let autoyear = document.getElementById('autoyr');
let getautoyear = new Date().getUTCFullYear();
autoyear.textContent = getautoyear


// End Footer Selection