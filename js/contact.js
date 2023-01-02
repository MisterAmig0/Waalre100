$(document).ready(function() {
  $('.submit').click(function(event) {



    // var name = $('.name').val()
    var email = $('.email').val()
    // var subject = $('.subject').val()
    // var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append("<div>email goedgekeurd</div>");
    } else {
      event.preventDefault()
      statusElm.append("<div>email is fout</div>");
    }



  })
})