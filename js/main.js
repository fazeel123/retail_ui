  
$(document).ready(function(){
    
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

    $("#modal_btn").click(function(){
        $("#main_modal").modal();
    });
});
  
