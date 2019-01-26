const url = 'https://api.github.com/users/luizsantos1997';
var xhttp = new XMLHttpRequest();
var dadosGIT;
var repos;                       

document.addEventListener("DOMContentLoaded", function() {
    
})

function fetch_git(){
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        dadosGIT = JSON.parse(xhttp.response);
        
        }
    };
    var htttRepos = new XMLHttpRequest();
    htttRepos.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            repos = JSON.parse(htttRepos.response);
            for(var i=0;i<repos.length;i++){
                      
                 document.getElementById('repos').innerHTML += '<li>'+
                     '<a href="'+repos[i].html_url+'"'+' target="_blank" >'+
                     repos[i].full_name+'</a>'+'</li>';
        
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    htttRepos.open("GET",url+'/repos',true);
    htttRepos.send();
}

window.onload = fetch_git();