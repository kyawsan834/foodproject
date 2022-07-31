// console.log('hay');

$(document).ready(function(){
    // console.log('hay');


        // for nav and restarts

        const restarts = document.querySelector('.restarts');

        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();
            // console.log(getscrolltop);

            if(getscrolltop >= 215){
                $(".navbar").addClass("navbars");
                $(".imgs").addClass("logos");
                $('.restarts').removeClass('d-none');
            }else{
                $(".navbar").removeClass("navbars");
                $(".imgs").removeClass("logos");
                $('.restarts').addClass('d-none');
            }

        });

        //for restart button

        $(restarts).click(function(){
            $(window).scrollTop(0);
        });
        
        //for footer copyright

        const getYear = document.getElementById('getYear');
        const fromjsYear = new Date().getFullYear();

       $(getYear).html(fromjsYear);


});
