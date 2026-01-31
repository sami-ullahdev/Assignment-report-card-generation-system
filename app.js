console.log("JS Running");

const students = [
  {
    id: "UNI-101",
    name: "Ali Khan",
    semesters: [
      { semester: 1, subjects: [
        { name: "Math I", marks: 78 },
        { name: "Programming Fundamentals", marks: 85 },
        { name: "English", marks: 72 },
        { name: "Physics", marks: 68 },
        { name: "Islamic Studies", marks: 80 }
      ]},
      { semester: 2, subjects: [
        { name: "Math II", marks: 74 },
        { name: "OOP", marks: 88 },
        { name: "Communication Skills", marks: 70 },
        { name: "DLD", marks: 65 },
        { name: "Pakistan Studies", marks: 82 }
      ]},
      { semester: 3, subjects: [
        { name: "Data Structures", marks: 90 },
        { name: "Database", marks: 84 },
        { name: "Discrete Math", marks: 76 },
        { name: "SE", marks: 81 },
        { name: "Statistics", marks: 73 }
      ]},
      { semester: 4, subjects: [
        { name: "OS", marks: 86 },
        { name: "CN", marks: 79 },
        { name: "Web Dev", marks: 92 },
        { name: "DAA", marks: 75 },
        { name: "Technical Writing", marks: 80 }
      ]},
      { semester: 5, subjects: [
        { name: "AI", marks: 88 },
        { name: "ML", marks: 83 },
        { name: "Mobile Dev", marks: 91 },
        { name: "Info Security", marks: 77 },
        { name: "Entrepreneurship", marks: 85 }
      ]}
    ]
  },

  {
    id: "UNI-102",
    name: "Sara Ahmed",
    semesters: [
      { semester: 1, subjects: [
        { name: "Math I", marks: 82 },
        { name: "Programming Fundamentals", marks: 79 },
        { name: "English", marks: 88 },
        { name: "Physics", marks: 74 },
        { name: "Islamic Studies", marks: 90 }
      ]},
      { semester: 2, subjects: [
        { name: "Math II", marks: 80 },
        { name: "OOP", marks: 83 },
        { name: "Communication Skills", marks: 85 },
        { name: "DLD", marks: 72 },
        { name: "Pakistan Studies", marks: 88 }
      ]},
      { semester: 3, subjects: [
        { name: "Data Structures", marks: 87 },
        { name: "Database", marks: 90 },
        { name: "Discrete Math", marks: 78 },
        { name: "SE", marks: 85 },
        { name: "Statistics", marks: 80 }
      ]},
      { semester: 4, subjects: [
        { name: "OS", marks: 84 },
        { name: "CN", marks: 88 },
        { name: "Web Dev", marks: 93 },
        { name: "DAA", marks: 82 },
        { name: "Technical Writing", marks: 86 }
      ]},
      { semester: 5, subjects: [
        { name: "AI", marks: 90 },
        { name: "ML", marks: 89 },
        { name: "Mobile Dev", marks: 94 },
        { name: "Info Security", marks: 85 },
        { name: "Entrepreneurship", marks: 88 }
      ]}
    ]
  },

  {
    id: "UNI-103",
    name: "Usman Raza",
    semesters: generateSemesters(70, 88)
  },
  {
    id: "UNI-104",
    name: "Ayesha Noor",
    semesters: generateSemesters(75, 92)
  },
  {
    id: "UNI-105",
    name: "Hamza Ali",
    semesters: generateSemesters(60, 85)
  },
  {
    id: "UNI-106",
    name: "Zainab Fatima",
    semesters: generateSemesters(78, 95)
  },
  {
    id: "UNI-107",
    name: "Bilal Hussain",
    semesters: generateSemesters(65, 82)
  },
  {
    id: "UNI-108",
    name: "Hira Sheikh",
    semesters: generateSemesters(72, 90)
  },
  {
    id: "UNI-109",
    name: "Ahmed Salman",
    semesters: generateSemesters(68, 86)
  },
  {
    id: "UNI-110",
    name: "Noor Malik",
    semesters: generateSemesters(80, 96)
  }
];

// helper to keep data realistic without repetition
function generateSemesters(min, max) {
  const subjects = [
    ["Math I","PF","English","Physics","Islamic Studies"],
    ["Math II","OOP","Comm Skills","DLD","Pak Studies"],
    ["DS","DB","Discrete Math","SE","Stats"],
    ["OS","CN","Web Dev","DAA","Tech Writing"],
    ["AI","ML","Mobile Dev","Info Security","Entrepreneurship"]
  ];

  return subjects.map((subList, i) => ({
    semester: i + 1,
    subjects: subList.map(s => ({
      name: s,
      marks: Math.floor(Math.random() * (max - min + 1)) + min
    }))
  }));
}
