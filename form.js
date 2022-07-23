$(document).ready(function () {
    $("button").click(function () {
        var i=0;
       var tmm=true;
        var fname=$("#fname").val().toString();
        var lname=$("#lname").val().toString();
        var uname=$("#uname").val().toString();
        var email=$("#email").val().toString();

        if(fname.length==0){
            tmm=false;                    
            $("#fname").focus();$("#fname").addClass("error");
            }
        else{
             for( i ;i<fname.length;i++){
                 if(fname.charCodeAt(i)<65 || fname.charCodeAt(i) >121 ){
                        tmm=false;
                        $("#fname").addClass("error");$("#fname").focus();
                        $("i").html("<i>First name must include Alphabet only</i>");
                        break;
                }

                 }
                  i=0;
                  if(lname.length==0 &&tmm==true){
                        tmm=false; 
                        $("#lname").focus(); $("i").html("");
                        $("#lname").addClass("error");
                        $("#fname").removeClass("error");
                        }
                   else{
                        for( i ;i<lname.length;i++){
                         if((lname.charCodeAt(i)<65 || lname.charCodeAt(i) >121) &&tmm==true){
                            $("#lname").addClass("error");$("#lname").focus();
                            $("i").html("<i>Second name must include Alphabet only</i>");
                            tmm=false;
                            break;
                            }
                    }i=0;
                        }
                        if(uname.length==0 &&tmm==true){
                        tmm=false; 
                        $("i").html("");
                        $("#uname").focus();
                        $("#uname").addClass("error");
                        $("#lname").removeClass("error");
                        }
                   else{
                        for( i ;i<uname.length;i++){
                         if((uname.charCodeAt(i)<65 || uname.charCodeAt(i) >121) &&tmm==true){
                             
                            if(uname.includes(".")==true && uname.charAt(i) !="." ){
                                tmm=false;
                                
                                $("#uname").addClass("error");
                                $("#uname").focus();
                                $("i").html("<i>User name must include . and characters only</i>");
                                console.log(uname.charAt(i)+"__"+tmm);
                            break; 
                            }
                            }
                        }  
                        i=0; 
                        if((email.includes("@")==false||email.includes(".")==false) && tmm==true){
                        $("#uname").removeClass("error");
                        $("#email").addClass("error");$("#email").focus();
                        $("i").html("Email must include @ and .");
                        tmm==false;
                        }
                        else if($("#tel").val()=="" &&tmm==true){
                            $("#email").removeClass("error");                            
                            
                            console.log($("#tel").empty());
                            $("i").html("<i>please write your Phone number</i>");
                        }
                        else if($("#age").val()==""&&tmm==true ){
                            $("#tel").removeClass("error");                            
                            $("i").html("<i>please write your Age</i>");
                        }
                        else if($("#edu").val()==""&&tmm==true){
                            $("#age").removeClass("error");                            
                            
                            $("i").html("<i>please write your Education</i>");
                        }
                        else if($("#pass1").val()==""&&tmm==true ){
                            $("i").html("<i>please write your Password</i>");
                        }
                        else if($("#pass2").val()==""&&tmm==true ){
                            $("i").html("<i>please confirm your Password</i>");
                        }
                    else if($("#pass1").val() !=$("#pass2").val() &&tmm==true){
                        $("#pass2").addClass("error");$("#pass1").focus();
                        $("i").html("<i>password doesn't match</i>");
                        }
                        else if($('input[name="gender"]:checked').val()==undefined &&tmm==true){
                       tmm=false;
                        $("i").html("<i>Please choose Your Gender</i>");
                        }
                        else if(tmm==true){
                            $("#pass2").removeClass("error");
                            //console.log($('input[name="gender"]:checked').val())
                            $("i").html("Congrats Your Account was Created *_*");
                        }
                    }
                    
        }






        
    })
    

})