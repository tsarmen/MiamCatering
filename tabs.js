document.getElementsByClassName("tabcontent firma")[0].click();
document.getElementsByClassName("tablinks firma")[0].click();
document.getElementsByClassName("tabcontent pulm")[0].click();
document.getElementsByClassName("tablinks pulm")[0].click();
document.getElementsByClassName("tabcontent synna")[0].click();
document.getElementsByClassName("tablinks synna")[0].click();
document.getElementsByClassName("tabcontent kodukokk")[0].click();
document.getElementsByClassName("tablinks kodukokk")[0].click();
arrayOfActiveTabs = [0,0,0,0];

function uusFirma(evt, retseptNr, tyyp) {
    var i, tabcontent, tablinks;
    activeTab = retseptNr;
    tabcontent = document.getElementsByClassName("tabcontent " + tyyp);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks " + tyyp);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tabcontent[activeTab].style.display = "block";
    evt.currentTarget.className += " active";

    setActiveTab(tyyp,activeTab)
}

function nextFirma(evt, tyyp){
    var i, tabcontent, tablinks;

    activeTab = getCorrectActiveTab(tyyp);

    tablinks = document.getElementsByClassName("tablinks " + tyyp);
    if(activeTab + 1 < tablinks.length){
      activeTab = activeTab + 1;
    }

    tabcontent = document.getElementsByClassName("tabcontent " + tyyp);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        if(i == activeTab){
          if(!tablinks[i].className.includes("active")){
            tablinks[i].className = tablinks[i].className += " active";
          }
        }else{
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }
    tabcontent[activeTab].style.display = "block";

    setActiveTab(tyyp, activeTab)
}

function prevFirma(evt, tyyp){
    var i, tabcontent, tablinks;

    activeTab = getCorrectActiveTab(tyyp);

    tablinks = document.getElementsByClassName("tablinks " + tyyp);
    if(activeTab - 1 >= 0){
      activeTab = activeTab - 1;
    }

    tabcontent = document.getElementsByClassName("tabcontent " + tyyp);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      if(i == activeTab){
        if(!tablinks[i].className.includes("active")){
          tablinks[i].className = tablinks[i].className += " active";
        }
      }else{
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }
    tabcontent[activeTab].style.display = "block";

    setActiveTab(tyyp, activeTab)
}

function getCorrectActiveTab(tyyp){
  if(tyyp == "firma"){
    return arrayOfActiveTabs[0];
  }else if (tyyp == "pulm") {
    return arrayOfActiveTabs[1];
  }else if (tyyp == "synna") {
    return arrayOfActiveTabs[2];
  }else if (tyyp == "kodukokk") {
    return arrayOfActiveTabs[3];
  }
}

function setActiveTab(tyyp, activeTab){
  if(tyyp == "firma"){
    arrayOfActiveTabs[0]=activeTab;
  }else if (tyyp == "pulm") {
    arrayOfActiveTabs[1]=activeTab;
  }else if (tyyp == "synna") {
    arrayOfActiveTabs[2]=activeTab;
  }else if(tyyp == "kodukokk"){
    arrayOfActiveTabs[3]=activeTab;
  }
}
