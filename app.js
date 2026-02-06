console.log("JS Running");

const students = [
  {
    name: "Sara Ahmed",
    id: "101",
    semesters: {
      1: { maths: 88, chemistry: 44, programming: 90, english: 86, physics: 82 },
      2: { maths: 85, chemistry: 50, programming: 88, english: 87, physics: 53 },
      3: { maths: 59, chemistry: 86, programming: 91, english: 78, physics: 84 },
      4: { maths: 83, chemistry: 85, programming: 72, english: 89, physics: 26 },
      5: { maths: 55, chemistry: 8, programming: 93, english: 10, physics: 26 }
    }
  },

  {
    name: "Ali Khan",
    id: "102",
    semesters: {
      1: { maths: 68, chemistry: 72, programming: 85, english: 75, physics: 50 },
      2: { maths: 74, chemistry: 50, programming: 62, english: 76, physics: 72 },
      3: { maths: 46, chemistry: 73, programming: 24, english: 77, physics: 84 },
      4: { maths: 79, chemistry: 85, programming: 85, english: 78, physics: 76 },
      5: { maths: 21, chemistry: 47, programming: 87, english: 80, physics: 58 }
    }
  },

  {
    name: "Ayesha Noor",
    id: "103",
    semesters: {
      1: { maths: 42, chemistry: 84, programming: 85, english: 50, physics: 78 },
      2: { maths: 84, chemistry: 99, programming: 87, english: 32, physics: 80 },
      3: { maths: 86, chemistry: 83, programming: 89, english: 84, physics: 82 },
      4: { maths: 58, chemistry: 55, programming: 91, english: 56, physics: 54 },
      5: { maths: 90, chemistry: 87, programming: 93, english: 48, physics: 96 }
    }
  },

  {
    name: "Hassan Raza",
    id: "104",
    semesters: {
      1: { maths: 70, chemistry: 68, programming: 75, english: 32, physics: 69 },
      2: { maths: 99, chemistry: 70, programming: 67, english: 54, physics: 71 },
      3: { maths: 54, chemistry: 92, programming: 39, english: 17, physics: 43 },
      4: { maths: 76, chemistry: 64, programming: 31, english: 78, physics: 75 },
      5: { maths: 38, chemistry: 56, programming: 91, english: 10, physics: 77 }
    }
  },

  {
    name: "Usman Tariq",
    id: "105",
    semesters: {
      1: { maths: 91, chemistry: 88, programming: 94, english: 89, physics: 87 },
      2: { maths: 82, chemistry: 79, programming: 95, english: 90, physics: 88 },
      3: { maths: 93, chemistry: 90, programming: 96, english: 91, physics: 69 },
      4: { maths: 64, chemistry: 81, programming: 97, english: 92, physics: 70 },
      5: { maths: 55, chemistry: 92, programming: 98, english: 93, physics: 99 }
    }
  }
];


const searchBtn = document.getElementById("search-btn");
const mainTable = document.getElementById("main-table");

function grade(p) {
  if (p >= 85) return "A";
  if (p >= 70) return "B";
  if (p >= 55) return "C";
  if (p >= 40) return "D";
  return "F";
}

function BtnHandler() {
  const input = document.getElementById("input").value.trim();
  mainTable.innerHTML = "";

  if (input === "") {
    mainTable.innerHTML = "<p>Please Enter Your Roll Number.</p>"
    return;
  };

  const student = students.find(s => s.id === input);

  if (!student) {
    mainTable.innerHTML += "<p>Student not found</p>";
    return;
  }

  let htmlTable = `
          <h2>${student.name} (ID: ${student.id})</h2>
                <tr>
                  <th>Subject</th>
                  <th>Sem 1</th>
                  <th>Sem 2</th>
                  <th>Sem 3</th>
                  <th>Sem 4</th>
                  <th>Sem 5</th>
                </tr>
            
            <tbody>
                <tr>
                  <td>Maths</td>
                  <td>${student.semesters[1].maths}</td>
                  <td>${student.semesters[2].maths}</td>  
                  <td>${student.semesters[3].maths}</td>
                  <td>${student.semesters[4].maths}</td>
                  <td>${student.semesters[5].maths}</td>
                </tr> 

                <tr>
                  <td>Chemistry</td>
                  <td>${student.semesters[1].chemistry}</td>
                  <td>${student.semesters[2].chemistry}</td>  
                  <td>${student.semesters[3].chemistry}</td>
                  <td>${student.semesters[4].chemistry}</td>
                  <td>${student.semesters[5].chemistry}</td>
                </tr>

                <tr>
                  <td>Programming</td>
                  <td>${student.semesters[1].programming}</td>
                  <td>${student.semesters[2].programming}</td>  
                  <td>${student.semesters[3].programming}</td>
                  <td>${student.semesters[4].programming}</td>
                  <td>${student.semesters[5].programming}</td>
                </tr>

                <tr>  
                  <td>English</td>
                  <td>${student.semesters[1].english}</td>
                  <td>${student.semesters[2].english}</td>
                  <td>${student.semesters[3].english}</td>
                  <td>${student.semesters[4].english}</td>
                  <td>${student.semesters[5].english}</td>
                </tr>

                <tr>
                  <td>Physics</td>
                  <td>${student.semesters[1].physics}</td>
                  <td>${student.semesters[2].physics}</td>  
                  <td>${student.semesters[3].physics}</td>
                  <td>${student.semesters[4].physics}</td>
                  <td>${student.semesters[5].physics}</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>${Object.values(student.semesters[1]).reduce((a, b) => a + b, 0)}</td>
                  <td>${Object.values(student.semesters[2]).reduce((a, b) => a + b, 0)}</td>
                  <td>${Object.values(student.semesters[3]).reduce((a, b) => a + b, 0)}</td>
                  <td>${Object.values(student.semesters[4]).reduce((a, b) => a + b, 0)}</td>
                  <td>${Object.values(student.semesters[5]).reduce((a, b) => a + b, 0)}</td>
                </tr>

                <tr>
                  <th>Percentage</th>
                  <td>${(Object.values(student.semesters[1]).reduce((a, b) => a + b, 0) / 5).toFixed(2)}%</td>
                  <td>${(Object.values(student.semesters[2]).reduce((a, b) => a + b, 0) / 5).toFixed(2)}%</td>
                  <td>${(Object.values(student.semesters[3]).reduce((a, b) => a + b, 0) / 5).toFixed(2)}%</td>
                  <td>${(Object.values(student.semesters[4]).reduce((a, b) => a + b, 0) / 5).toFixed(2)}%</td>
                  <td>${(Object.values(student.semesters[5]).reduce((a, b) => a + b, 0) / 5).toFixed(2)}%</td>
                </tr>

                <tr>
                  <th>Grade</th>
                  <td>${grade((Object.values(student.semesters[1]).reduce((a, b) => a + b, 0) / 5))}</td>
                  <td>${grade((Object.values(student.semesters[2]).reduce((a, b) => a + b, 0) / 5))}</td>
                  <td>${grade((Object.values(student.semesters[3]).reduce((a, b) => a + b, 0) / 5))}</td>
                  <td>${grade((Object.values(student.semesters[4]).reduce((a, b) => a + b, 0) / 5))}</td>
                  <td>${grade((Object.values(student.semesters[5]).reduce((a, b) => a + b, 0) / 5))}</td>
                </tr>

                <tr>
                  <th>Status</th>
                  <td>${grade((Object.values(student.semesters[1]).reduce((a, b) => a + b, 0) / 5)) === "F" ? "Fail" : "Pass"}</td>  
                  <td>${grade((Object.values(student.semesters[2]).reduce((a, b) => a + b, 0) / 5)) === "F" ? "Fail" : "Pass"}</td>
                  <td>${grade((Object.values(student.semesters[3]).reduce((a, b) => a + b, 0) / 5)) === "F" ? "Fail" : "Pass"}</td>
                  <td>${grade((Object.values(student.semesters[4]).reduce((a, b) => a + b, 0) / 5)) === "F" ? "Fail" : "Pass"}</td>
                  <td>${grade((Object.values(student.semesters[5]).reduce((a, b) => a + b, 0) / 5)) === "F" ? "Fail" : "Pass"}</td>
                </tr>
            </tbody>
            <div class="Stutus"></div>

`;
  mainTable.innerHTML = htmlTable;



  const status = document.querySelector(".Stutus");
  if (grade((Object.values(student.semesters[1]).reduce((a, b) => a + b, 0) / 5)) === "F" ||
    grade((Object.values(student.semesters[2]).reduce((a, b) => a + b, 0) / 5)) === "F" ||
    grade((Object.values(student.semesters[3]).reduce((a, b) => a + b, 0) / 5)) === "F" ||
    grade((Object.values(student.semesters[4]).reduce((a, b) => a + b, 0) / 5)) === "F" ||
    grade((Object.values(student.semesters[5]).reduce((a, b) => a + b, 0) / 5)) === "F") {
    status.innerHTML += "<p style='color: red; font-weight: bold;'>Overall Status: Fail</p>";
  }
  else {
    status.innerHTML += "<p style='color: green; font-weight: bold;'> Overoll Status: Pass</p>";
  }
}

searchBtn.addEventListener("click", BtnHandler);