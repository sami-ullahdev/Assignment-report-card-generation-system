console.log("JS Running");

const subjects = ["Maths", "Physics", "Chemistry", "English", "Programming"];

const students = [
  {
    name: "Ali Khan",
    id: "UNI-401",
    semesters: [
      [78, 70, 68, 75, 82],
      [72, 69, 71, 74, 80],
      [75, 73, 70, 76, 83],
      [77, 72, 74, 78, 85],
      [80, 75, 76, 79, 88],
    ],
  },
];

let input = document.getElementById("input");
// let searchBtn = document.getElementById("search-btn");
let mainTable = document.getElementById("main-table");


function inputhandler() {

    let student = students.find(s => s.id === input);

    if (!student) {
        mainTable.innerHTML = "<p>User Not Fing</p>";
        return;
    }
}

function grade(p) {
    if (p >= 85) return "A";
    if (p >= 70) return "B";
    if (p >= 55) return "C";
    if (p >= 40) return "D";
    return "F";
}
input.addEventListener("click", inputhandler);