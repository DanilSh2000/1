function myFunction() {
    var input, filter, div, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myUL");
    li = div.getElementsByTagName('li');
    
    for (i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}
