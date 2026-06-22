document.getElementById("mySubmit").onclick = function(){
    let username =
    document.getElementById("myText").value;
    if (username.trim()===""){
        alert("please enter  your name");
        return;
    }
    document.getElementById("welcomepage").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
        document.getElementById("greeting").textContent = `welcome ${username}`;
        showSection('about')
}       
    document.getElementById("backBtn").onclick = function(){
        document.getElementById("portfolio").style.display = "none";
         document.getElementById("welcomepage").style.display ="block";

    }
      function showSection(section){
    document.getElementById("about-section").style.display = "none";
    document.getElementById("skills-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";

    document.getElementById(section + "-section").style.display = "block";
} 


    