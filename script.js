/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId, clickedButton){

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if(selectedPage){
        selectedPage.classList.add("active");
    }

    // Remove active class
    document.querySelectorAll(".nav-links button").forEach(button => {
        button.classList.remove("active");
    });

    // Add active class
    if(clickedButton){
        clickedButton.classList.add("active");
    }

    // Close mobile menu
    document.getElementById("navLinks").classList.remove("show");

    // Scroll to top
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

    document
        .getElementById("navLinks")
        .classList.toggle("show");

}


/* =========================
   STUDENT SEARCH
========================= */

function searchStudents(){

    const input =
        document
        .getElementById("studentSearch")
        .value
        .toLowerCase();

    const rows =
        document.querySelectorAll(
            "#studentTable tr"
        );

    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        if(text.includes(input)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });
}


/* =========================
   COURSE SEARCH
========================= */

function searchCourses(){

    const input =
        document
        .getElementById("courseSearch")
        .value
        .toLowerCase();

    const courses =
        document.querySelectorAll(".course");

    courses.forEach(course => {

        const text =
            course.innerText.toLowerCase();

        if(text.includes(input)){
            course.style.display = "";
        }
        else{
            course.style.display = "none";
        }

    });
}


/* =========================
   STUDENT DETAILS
========================= */

function viewStudent(
    name,
    program,
    semester
){

    document.getElementById(
        "modalTitle"
    ).innerText = name;

    document.getElementById(
        "modalText"
    ).innerHTML = `

        <b>Program:</b>
        ${program}

        <br><br>

        <b>Semester:</b>
        ${semester}

        <br><br>

        <b>Status:</b>
        Active

    `;

    document.getElementById(
        "modal"
    ).style.display = "flex";
}


/* =========================
   EVENT DETAILS
========================= */

function eventInfo(eventName){

    document.getElementById(
        "modalTitle"
    ).innerText = eventName;

    document.getElementById(
        "modalText"
    ).innerText =
        "This event is part of the university management frontend demo.";

    document.getElementById(
        "modal"
    ).style.display = "flex";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(){

    document.getElementById(
        "modal"
    ).style.display = "none";
}


/* =========================
   CLOSE MODAL OUTSIDE
========================= */

window.onclick = function(event){

    const modal =
        document.getElementById("modal");

    if(event.target === modal){
        closeModal();
    }

};