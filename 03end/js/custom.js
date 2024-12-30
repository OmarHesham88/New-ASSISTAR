$(document).ready(function () {
// Show / hide form password
$('.login-form .show-pass').click(function(){
   $(this).hide();
   $('.login-form .hide-pass').show();
   $('.login-form .password').attr('type','text')

})
$('.login-form .hide-pass').click(function(){
    $(this).hide();
    $('.login-form .show-pass').show();
    $('.login-form .password').attr('type','password')
});
// sortby menu
// socail links
$('.footer-social label .fa-toggle-on').click(function(){
    $(this).parent().toggleClass('on-off')
})
// delete alert
    // alert add to favorite
    
    $(document).on('click', 'svg.svg-inline--fa.fa-trash', function (e) {    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2E619E',
            cancelButtonColor: '#A61D21',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',
              
              )
            }
          })
        
    });
// section on -off
$('.section-num .on').click(function(){
    $(this).toggleClass('section-off')
})

// fileds nav
$('.question-types .label-box p').click(function(){
    $('.question-types ul').slideToggle();
})
$(document).on('click', function (event) {
    if (!$(event.target).closest('.question-types ul, .question-types .label-box p').length) {
        $('.question-types ul').slideUp('fast');

    }
  });
// edit question
$('.question-name .fa-ellipsis-vertical').click(function(){
    $(this).parents('.question-name').find('.edit-ques').fadeIn();
})
$(document).on('click', function (event) {
    if (!$(event.target).closest(' .fa-ellipsis-vertical, .edit-ques').length) {
        $('.edit-ques').fadeOut('fast');

    }
  });
//   text placeholder
$('.notification').click(function(){
    url = './notifications.html'
    window.location = url;
})
 // toggle nav
 $('.sort-menu').hide();
 $(document).on('click', function (event) {
    if (!$(event.target).closest('.sort-by').length) {
        $('.sort-menu').fadeOut('fast');

    }
  });
// filter menu
$('.sort-by').click(function(event){
    event.preventDefault();
    $('.sort-menu').fadeToggle('fast')  ;


})
// color picker
let colorValue = $('input#demo').attr('value');
$('div#pickColor .modal-dialog .color-picker').css('background', colorValue)
// fliter menu
 // toggle nav
 $('.filter-menu').hide();
 $(document).on('click', function (event) {
    if (!$(event.target).closest('.filter-by, .filter-users').length) {
        $('.filter-menu').fadeOut('fast');

    }
  });
// filter menu
$('.filter-by').click(function(event){
    event.preventDefault();
    $('.filter-menu').fadeToggle('fast')  ;


})
// ckecked box
$('.setting-form input').click(function(){
    $(this).parent().toggleClass('checked-setting')
})



$('.tagBoxes input').click(function(){
    $(this).parent().toggleClass('checked')
})
$('.tagInputs').click(function(){
    $('.tagBoxes').slideToggle();
})
// toggle-nav
$(document).on('click', function (event) {
    if (!$(event.target).closest('.tagInputs, .tagBoxes').length) {
        $('.tagBoxes').slideUp('fast');

    }
  });
// subscription options
$('.Subscription-value, .single-value').slideUp(); 
$('#subscriptionOptions').change(function(){
    if($(this).val() == 'Subscription'){ 
    $('.single-value').slideUp();
    $('.Subscription-value').slideDown(); 

    }else if($(this).val() == 'Single'){
        $('.Subscription-value').slideUp(); 
        $('.single-value').slideDown();
    }else{
        $('.Subscription-value, .single-value').slideUp(); 
 
    }
  });
// add new section
$('.single-template .add-new-section .col-xl-3 .add-new').click(function(){
    $('div#newSection').slideDown('fast');
})
// user status
$('.activeUsers').click(function(){
    $('.template-kinds a').removeClass('active');
    $(this).addClass('active')
   $('.active-status').parents('tr').fadeIn('slow');
  $('.deactive-status').parents('tr').fadeOut('fast');
   
})
$('.deactiveUsers').click(function(){
    $('.template-kinds a').removeClass('active');
    $(this).addClass('active')
  $('.deactive-status').parents('tr').fadeIn('slow');
  $('.active-status').parents('tr').fadeOut('fast');

   
})
// invoice status
$('.paidInvoices').click(function(){
    $('.template-kinds a').removeClass('active');
    $(this).addClass('active')
    $('.unpaid').parents('tr').fadeOut('fast');
   $('.paid').parents('tr').fadeIn('fast');
   
})
$('.unpaidInvoices').click(function(){
    $('.template-kinds a').removeClass('active');
    $(this).addClass('active')
    $('.paid').parents('tr').fadeOut('fast');
  $('.unpaid').parents('tr').fadeIn('fast');

   
})
// checklist
let checkList = $('.check-list ul')
let listItem = '<li><input type="text" placeholder="Type check box"></li>'
let listRecord = 3;
$('.add-box').click(function(){
    checkList.append(listItem)
    listRecord++
$('.check-list .record').text(listRecord)
})
// open section
$(".add-new-section  .ps-0 .new-section").click(function(e) {
    if (!$(e.target).hasClass('on') && !$(e.target).hasClass('question-name') ) {
        $(this).find('.add-new, .question-name').addClass('d-flex');
        $(this).addClass('section-open')
    }
});
// open/close panel
function openPanel(){
    $('.open-panel').fadeOut('fast');
    $('.close-panel').fadeIn('fast');
    if($(window).width() > 767){
        $('.panel-nav').addClass('nav-closing')
        $('.panel-nav').removeClass('nav-opening')
        $('.admin-panel .col-md-11').removeClass('slide-content')
        $('.admin-panel .col-md-11').addClass('back-content')
        $('.panel-line').show()

    }else{
        $('.panel-nav .panel-slide').slideToggle();
        $('.panel-line').hide()

    }

}
function closePanel(){
    $('.close-panel').fadeOut('fast');
    $('.open-panel').fadeIn('fast')
    if($(window).width() > 767){
        $('.panel-nav').removeClass('nav-closing')
        $('.panel-nav').addClass('nav-opening');
        $('.admin-panel .col-md-11').removeClass('back-content')
        $('.admin-panel .col-md-11').addClass('slide-content')
    }else{
        $('.panel-nav .panel-slide').slideToggle();

    }
    $('.panel-line').hide()
}
// profile search
$('.profile-search').click(function(){
    $('.search-profile').slideDown();
    $('body').css('overflow', 'hidden');
})
$('.search-profile .close-search').click(function(){
    $('.search-profile').slideUp();
    $('body').css('overflow', 'auto');



})
$(document).on('click', function (event) {
    if (!$(event.target).closest('.profile-search, .search-profile div, .close-search').length) {
        $('.search-profile').slideUp();
        $('body').css('overflow', 'auto')
    }
  });
// textarea
var textValue = $('label#text-tools textarea');
$('.fa-align-left, .fa-indent').click(function(){
    textValue.removeClass()
    textValue.addClass('text-start')
})
$('.fa-align-center').click(function(){
    textValue.removeClass()

    textValue.addClass('text-center')
})
$('.fa-align-right, .fa-outdent').click(function(){
    textValue.removeClass()
    textValue.addClass('text-end')
})
$('.fa-bold').click(function(){
    textValue.removeClass()
    textValue.addClass('fw-bold')
})
$('.fa-underline').click(function(){
    textValue.removeClass()
    textValue.addClass('text-decoration-underline')
})
$('.fa-italic').click(function(){
    textValue.removeClass()
    textValue.addClass('fst-italic')
})
// profile search

function responsivePanel(){
    $('.open-panel').fadeToggle('fast')
    $('.close-panel').fadeToggle('fast')
    $('.panel-nav .panel-slide').slideToggle();
}
$('.open-panel').click(function(){
    openPanel()  
})
$('.close-panel').click(function(){
    closePanel()
})

$('.panel-header').click(function(){ 
if($(window).width() <= 767){
       
        responsivePanel()
    }
    })

 // total records
let totalRecords = $('.admin-panel .col-md-11 .responsive-table tbody tr').length;
$('.page-counter .total-record .records, .category-header .category-total span').text(totalRecords)

    // Counter
    let count = 1;
    let counterLength = $('.counterLength').text()
    $('.plus').click(function () {
        if (count < counterLength) {
            count++
            $('.counter').text(count)
        } else {
            count = counterLength
            $('.counter').text(count)

        }

    });
    $('.mince').click(function () {
        if ($('.counter').text() > 1) {
            count--
            $('.counter').text(count)
        } else {
            count = 1;
            $('.counter').text(count)

        }

    });
// pagination selection
let recordPages = $('.page-counter select')
for(let i = 1 ; i <= 100 ; i ++){
    recordPages.append($('<option></option>').val(i).html(i))

}
// table border
let tableLength = $('.responsive-table tbody tr > td').length
if($(window).width() <= 1119){
    if(tableLength % 2==0){
        console.log(tableLength)
   //odd
        $('.responsive-table td:nth-last-child(2)').css('border-bottom', '1px solid #e2e3e8')
        $('.responsive-table tr td:last-of-type').css('border-right', '2px solid #e2e3e8')
     }
     else {
        console.log(tableLength)

         //even
        $('.responsive-table td:nth-last-child(2)').css('border-bottom', '0')
        $('.responsive-table tr td:last-of-type').css('border-right', '0')
     }
}


});
$(window).on('resize', function(){     
    if($(window).width() <= 767){
       $('.admin-panel .col-md-11').css('width', '100%')
    }else{
        $('.admin-panel .col-md-11').css('width', 'calc(100% - 354px')

    }
       
    });
    
