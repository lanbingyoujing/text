$(function () {

    //$('li').click(function () {
    //    var colorL=$(this).attr('myColor');
    //    $('div').css({
    //        background:colorL
    //    })
    //})

var ha='';
    var h='';
    $('div').click(function () {
         ha=$('input').attr('value');
        localStorage.setItem("age",ha);

         h=localStorage.getItem("age");

    });


$('button').click(function () {
    $('p').html(localStorage.getItem("age"))
})






















});