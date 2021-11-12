var max = 0;
$('ul, ol').each(function(){
  $(this).find('li').each(function(index){
    if(index >= max) $(this).hide()
  })
})
