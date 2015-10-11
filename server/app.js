$(function(){
    $("#newItem").submit(function(event){
        event.preventDefault();
        var formInput = $("#newItem").serialize();
        $.ajax({
            type:"GET",
            url:"/users/getList",
            data: formInput,
            success: function(response){
                console.log('Success!');
                getData();
            }
        });
    });
});