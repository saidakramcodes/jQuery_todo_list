// This is todo list program without server part

$(document).ready(function(){

    // hide Elements
    $(".add-todo-form").hide();

    // hide Alert function
    function alertHideShow(){
        if($('.list-group-item').length){
            $('.alert').hide();
        } else {
            $('.alert').show(); 
        }
    };


    // Add Task function
    function addTask(){
        var userInput = $("#input").val();
        var listGroupItem = '<div class="list-group-item">' +
                            '<a href="#" class="button-unchecked">' + 
                            '<i class="fa fa-square-o"></i></a>&nbsp&nbsp&nbsp' +
                            '<span class="task">' + 
                            userInput +
                            '</span>' +
                            '<a href="#" class="task">' +
                            '<i class="glyphicon glyphicon-trash pull-right" data-toggle="tooltip" data-placement="left" title="Delete">' +
                            '</i></a></div>';
        $("#list").append(listGroupItem);
        $('[data-toggle="tooltip"]').tooltip();
        alertHideShow();
    }


    // Check and Uncheck function
    $('#list').on('click', '.button-unchecked', function(){
        $(this).children('i').toggleClass('fa-check-square');
        $(this).siblings('.task').toggleClass('checked');
        // $(this).parent('div').toggleClass('finished-tasks');
    });

    
    // open Add Form
    $("#pre-add").click(function(){
        $('#pre-add').hide();
        $('.add-todo-form').show();
    });

    $("#cancel").click(function(){
        $('.add-todo-form').hide();
        $('#pre-add').show();

    });


    // delete Task function
    $('#list').on('click', '.task', function() {
        $(this).parent('div').remove();
        // $(this).parent('div').toggleClass('deleted-tasks');
        alertHideShow();

    });


    // add task by click button
    $("#add").click(function(){
        addTask();
    });

    // add task by enter keyboard button
    $('input').keypress(function(e) {
        if(e.which == 13) {
            alert('You pressed enter!');
        }
    });

    // function clickOnTab(){
    //     $('a').on('click', className, function(){
    //         if(className == 'deleted-tasks'){
    //             $('deleted-tasks').show();
    //             $('active-tasks').hide();
    //             $('finished-tasks').hide();
    //         } else if(className == 'finished-tasks'){
    //             $('finished-tasks').show();
    //             $('deleted-tasks').hide();
    //             $('active-tasks').hide();
    //         } else if(className == 'all-tasks'){
    //             $('finished-tasks').show();
    //             $('deleted-tasks').show();
    //             $('active-tasks').show();
    //         }

    //     });
    // };

    // $('a').on('click', '.deleted-tasks-tab', function(){
    //     $('.deleted-tasks').show();
    //     $('.active-tasks').hide();
    //     $('.finished-tasks').hide();
    // });

    // $('a').on('click', '.finished-tasks-tab', function(){
    //     $('.deleted-tasks').show();
    //     $('.active-tasks').hide();
    //     $('.finished-tasks').hide();
    // });




});


