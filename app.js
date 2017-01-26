 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAOlydQIWvAxIJM5pWeVnip8LNbCaV12hZAuXiNcvGpT11OTZBDcAOEykTnusHLLYY6IEbyxMiTr5ZBomnzgoegWZCmJaA8yNh5IX8ZAvZBifreE8533X6ZC8RnZAEUsZAqj9zKx3PAwEZB2JJCjShhQoOZCsjBIG6gmgQZDZD';
$('.loader').hide();
    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#status").text(response.id);
                     $("#stat").text(response.birthday);

                },
                 error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },

                timeout:10000, // in ms

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)
    $



  });