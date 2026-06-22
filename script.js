document.getElementById("mySubmit").onclick = function(){
    let username = document.getElementById("myText").value;
    
    document.getElementById("welcomepage").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("greeting").textContent = `welcome ${username}`;
    
    // Shows the about section first when you log in
    showSection('about'); 
}

// Fixed back button logic
document.getElementById("backBtn").onclick = function(){
    document.getElementById("welcomepage").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}

// The new function that handles the tab switching
function showSection(sectionId) {
    // Hide all sections first
    document.getElementById("about-section").style.display = "none";
    document.getElementById("skills-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";

    // Show only the section that was clicked
    document.getElementById(sectionId + "-section").style.display = "block";
}
    
