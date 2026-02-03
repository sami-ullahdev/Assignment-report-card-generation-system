console.log("JS Running");

const students = [

  {
    name: "Ali Khan",
    id: "101",
    semesters: {
      1: { maths: 78, chem: 70, programming: 82, english: 75, physics: 68 },
      2: { maths: 72, phy: 69, javascript: 80, oop: 76, stats: 71 },
      3: { dsa: 74, db: 78, os: 70, se: 73, discrete: 69 },
      4: { cn: 76, web: 85, daa: 72, ai: 78, techWriting: 80 },
      5: { ml: 81, mobile: 84, security: 75, iot: 70, entrepreneurship: 82 }
    }
  },

  {
    name: "Sara Ahmed",
    id: "102",
    semesters: {
      1: { maths: 88, chem: 84, programming: 90, english: 86, physics: 82 },
      2: { maths: 85, phy: 80, javascript: 88, oop: 87, stats: 83 },
      3: { dsa: 89, db: 91, os: 85, se: 88, discrete: 84 },
      4: { cn: 87, web: 92, daa: 86, ai: 90, techWriting: 88 },
      5: { ml: 93, mobile: 91, security: 89, iot: 86, entrepreneurship: 90 }
    }
  },

  {
    name: "Usman Raza",
    id: "103",
    semesters: {
      1: { maths: 65, chem: 60, programming: 68, english: 66, physics: 62 },
      2: { maths: 64, phy: 61, javascript: 67, oop: 65, stats: 63 },
      3: { dsa: 66, db: 69, os: 64, se: 65, discrete: 62 },
      4: { cn: 67, web: 70, daa: 64, ai: 66, techWriting: 68 },
      5: { ml: 69, mobile: 71, security: 65, iot: 63, entrepreneurship: 68 }
    }
  },

  {
    name: "Ayesha Noor",
    id: "104",
    semesters: {
      1: { maths: 92, chem: 90, programming: 94, english: 91, physics: 89 },
      2: { maths: 90, phy: 88, javascript: 93, oop: 92, stats: 89 },
      3: { dsa: 91, db: 94, os: 90, se: 92, discrete: 88 },
      4: { cn: 93, web: 96, daa: 91, ai: 94, techWriting: 92 },
      5: { ml: 95, mobile: 97, security: 93, iot: 90, entrepreneurship: 94 }
    }
  },

  {
    name: "Hamza Ali",
    id: "105",
    semesters: {
      1: { maths: 72, chem: 68, programming: 74, english: 71, physics: 67 },
      2: { maths: 70, phy: 66, javascript: 73, oop: 72, stats: 69 },
      3: { dsa: 71, db: 74, os: 70, se: 72, discrete: 68 },
      4: { cn: 73, web: 78, daa: 71, ai: 74, techWriting: 76 },
      5: { ml: 77, mobile: 79, security: 72, iot: 69, entrepreneurship: 75 }
    }
  }
];


// let mainTableHtml = `
//         <h2>${students.name}</h2>
//             <thead>
//                 <tr>
//                     <th>Subject</th>
//                     <th>Sem 1</th>
//                     <th>Sem 2</th>
//                     <th>Sem 3</th>
//                     <th>Sem 4</th>
//                     <th>Sem 5</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 <tr>
//                     <td>English</td>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <td>Math</td>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <td>P.Fundamental</td>
//                     <td>86</td>
//                     <td>92</td>
//                     <td>78</td>
//                     <td>89</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <td>English</td>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <td>English</td>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <th class="bgc-color">Total</th>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <th class="bgc-color">Percentage</th>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <th class="bgc-color">Grade</th>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>

//                 <tr>
//                     <th class="bgc-color">status</th>
//                     <td>85</td>
//                     <td>52</td>
//                     <td>32</td>
//                     <td>66</td>
//                     <td>98</td>
//                 </tr>
//             </tbody>
// `


const searchBtn = document.getElementById("search-btn");
const mainTable = document.getElementById("main-table");


function inputhandler() {
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

  let mainTableHtml = `
          <h2>${student.name} (ID: ${student.id})</h2>
                <tr>
                  <th class="bgc-color">Subject</th>
                  <th class="bgc-color">Sem 1</th>
                  <th class="bgc-color">Sem 2</th>
                  <th class="bgc-color">Sem 3</th>
                  <th class="bgc-color">Sem 4</th>
                  <th class="bgc-color">Sem 5</th>
                </tr>
`;
  mainTable.innerHTML = mainTableHtml;
  
}


function grade(p) {
  if (p >= 85) return "A";
  if (p >= 70) return "B";
  if (p >= 55) return "C";
  if (p >= 40) return "D";
  return "F";
}
searchBtn.addEventListener("click", inputhandler);