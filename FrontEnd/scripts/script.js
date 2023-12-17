function sendMail(){
    let toMail = $('#toMail').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/mail/send",
        async:true,
        data:JSON.stringify({
            "toMail": toMail,
            "message": message,
            "subject": subject
        }),
        success: function (data) {
            alert("Email Sent");
        },
        error: function (xhr, exception) {
            alert("Error");
          }
    })
}