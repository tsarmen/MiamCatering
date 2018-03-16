document.getElementById("pk1").style.display = "block";
var activeTab = 1;
document.getElementsByClassName("tablinks")[0].click();


function uusFirma(evt, retsept) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(retsept).style.display = "block";
    evt.currentTarget.className += " active";
    activeTab = retsept.substring(2);
}

function nextFirma(evt){
    tablinks = document.getElementsByClassName("tablinks");
    if(parseInt(activeTab) + 1 <= tablinks.length){
      activeTab = parseInt(activeTab) + 1;
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        if(i == parseInt(activeTab)-1){
          if(!tablinks[i].className.includes("active")){
            tablinks[i].className = tablinks[i].className += " active";
          }
        }else{
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }

    document.getElementById("pk" + activeTab).style.display = "block";
}

function prevFirma(evt){
    tablinks = document.getElementsByClassName("tablinks");
    if(parseInt(activeTab) - 1 >= 1){
      activeTab = parseInt(activeTab) - 1;
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      if(i == parseInt(activeTab) - 1){
        if(!tablinks[i].className.includes("active")){
          tablinks[i].className = tablinks[i].className += " active";
        }
      }else{
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }

    document.getElementById("pk" + activeTab).style.display = "block";
}
