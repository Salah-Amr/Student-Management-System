let studentsNames = ["Salah Amr", "Ahmed Hamdy", "Amr Mohammed", "Mohammed Nour", "Abdelrahman Mustafa"];
let studentsDegrees = [ [90, 80, 75, 65, 90],
                        [49, 70, 60, 50, 80],
                        [65, 80, 69, 80, 76],
                        [80, 65, 75, 60, 55],
                        [76, 56, 65, 30, 15] ];
let subjectNames = ["Arabic", "English", "French", "Math", "Physics"];
let studentsMarks = [[], [], [], [], []];
let GPA = [];
let GPA_Mark = [];
let average = [];
let top_least = [];

let totalStudents = studentsNames.length;
let totalSubjects = subjectNames.length;

let table_div;

// console.log(totalStudents, totalSubjects);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (studentsDegrees[i][j] >= 95) {
      studentsMarks[i][j] = "A+";
    }
    else if (studentsDegrees[i][j] >= 90) {
      studentsMarks[i][j] = "A";
    }
    else if (studentsDegrees[i][j] >= 85) {
      studentsMarks[i][j] = "A-";
    }
    else if (studentsDegrees[i][j] >= 80) {
      studentsMarks[i][j] = "B+";
    }
    else if (studentsDegrees[i][j] >= 75) {
      studentsMarks[i][j] = "B";
    }
    else if (studentsDegrees[i][j] >= 70) {
      studentsMarks[i][j] = "B-";
    }
    else if (studentsDegrees[i][j] >= 65) {
      studentsMarks[i][j] = "C+";
    }
    else if (studentsDegrees[i][j] >= 60) {
      studentsMarks[i][j] = "C";
    }
    else if (studentsDegrees[i][j] >= 55) {
      studentsMarks[i][j] = "D";
    }
    else if (studentsDegrees[i][j] >= 50) {
      studentsMarks[i][j] = "D-";
    }
    else {
      studentsMarks[i][j] = "F";
    }
  }
}

// console.log(studentsMarks);

const TOTAL_DEGREES = 500;
let sum_G, gpa;
for (let i = 0; i < totalStudents; i++) {
  sum_G = 0;
  for (let j = 0; j < totalSubjects; j++) {
    sum_G += studentsDegrees[i][j];
  }
  gpa = sum_G / TOTAL_DEGREES;
  gpa *= 4;
  GPA[i] = gpa;
}
// console.log(GPA);

for (let i = 0; i < totalStudents; i++) {
  if (GPA[i] >= 3.75) {
    GPA_Mark[i] = "A+";
  }
  else if (GPA[i] >= 3.5) {
    GPA_Mark[i] = "A";
  }
  else if (GPA[i] >= 3.0) {
    GPA_Mark[i] = "B+";
  }
  else if (GPA[i] >= 2.75) {
    GPA_Mark[i] = "B";
  }
  else if (GPA[i] >= 2.5) {
    GPA_Mark[i] = "C+";
  }
  else if (GPA[i] >= 2.25) {
    GPA_Mark[i] = "C";
  }
  else if (GPA[i] >= 2.0) {
    GPA_Mark[i] = "D+";
  }
  else if (GPA[i] >= 1.75) {
    GPA_Mark[i] = "D";
  }
  else {
    GPA_Mark[i] = "D-";
  }
}

let sum_D;
for (let i = 0; i < totalSubjects; i++) {
  sum_D = 0;
  for (let j = 0; j < totalStudents; j++) {
    sum_D += studentsDegrees[j][i];
  }
  average[i] = sum_D / totalStudents;
}
// console.log(average);

let top_index = 0, last_index = 0;
let max_top = 0, max_least = 5;
for (let i = 0; i < totalStudents; i++) {
  if (max_top < GPA[i]) {
    max_top = GPA[i];
    top_index = i;
  }
  if (max_least > GPA[i]) {
    max_least = GPA[i];
    last_index = i;
  }
}

// console.log(max_top, top_index, max_least, last_index);

top_least[0] = top_index;
top_least[1] = last_index;

// console.log(top_least);

/*
  Marks conditions:
    >= 95 A+
    >= 90 A
    >= 85 A-
    >= 80 B+
    >= 75 B
    >= 70 B-
    >= 65 C
    >= 60 C-
    >= 55 D
    >= 50 D-
    else F
*/

/*
  GPA Conditions:
  >= 3.75 A+
  >= 3.5 A
  >= 3.0 B+
  >= 2.75 B
  >= 2.5 C+
  >= 2.25 C
  >= 2.0 D+
  >= 1.75 D
  else D-
*/

let tempStudentsNames = studentsNames;
let tempStudentsDegrees = studentsDegrees;
let tempSubjectNames = subjectNames;
let tempStudentsMarks = studentsMarks;
let tempGPA = GPA;
let tempGPA_Mark = GPA_Mark;
let tempAverage = average;
let tempTop_least = top_least;
let tempTotalStudents = totalStudents;
let tempTotalSubjects = totalSubjects;
let indices = [];

const input = document.getElementById("search_bar");
input.addEventListener("input", function () {
  apply_search();
});

function apply_search() {
  const search_text = document.getElementById("search_bar").value;
  // console.log(search_text);
  if (search_text == "") {
    indices = [];
    for (let i = 0; i < totalStudents; i++) {
      indices += i;
    }
    tempTotalStudents = studentsNames.length;
  }
  else {
    indices = [];
    for (let i = 0; i < totalStudents; i++) {
      if (studentsNames[i].includes(search_text)) {
        indices += i;
      }
    }
    tempTotalStudents = indices.length;
  }
  updateArrays();
  const tableId = document.querySelector("#table_div table").id;
  switch (tableId) {
    case 'all_degrees':
      get_all_degrees();
      break;
    case 'marks':
      get_marks();
      break;
    case 'student_status':
      get_student_status();
      break;
    case 'gpa':
      get_gpa();
      break;
    case 'average':
      get_average();
      break;
    case 'top_last':
      get_top_last();
      break;
  }
}

function updateArrays() {
  tempStudentsNames = [];
  tempStudentsDegrees = [];
  tempStudentsMarks = [];
  tempGPA = [];
  tempGPA_Mark = [];
  if (indices == []) {
    tempStudentsNames = studentsNames;
    tempStudentsDegrees = studentsDegrees;
    tempStudentsMarks = studentsMarks;
    tempGPA = GPA;
    tempGPA_Mark = GPA_Mark;
  }
  else {
    for (let i = 0; i < indices.length; i++) {
      tempStudentsNames[i] = studentsNames[indices[i]];
      tempStudentsDegrees[i] = studentsDegrees[indices[i]];
      tempStudentsMarks[i] = studentsMarks[indices[i]];
      tempGPA[i] = GPA[indices[i]];
      tempGPA_Mark[i] = GPA_Mark[indices[i]];
    }
  }
}

let upperTemplate = "", lowerTemplate = "", middleTemplate = "", fullTemplate = "";
function get_all_degrees() {
  upperTemplate = '<table id="all_degrees">\n'
  + '        <tr> '
  + '        <th rowspan="2" width="70%">Student Name</th> '
  + '        <th colspan="5">Degrees</th> '
  + '      </tr> '
  + '      <tr> '
  + '        <th>Arabic</th> '
  + '        <th>English</th> '
  + '        <th>French</th> '
  + '        <th>Math</th> '
  + '        <th>Physics</th> '
  + '      </tr>\n';
  middleTemplate = "";
  for (let i = 0; i < tempTotalStudents; i++) {
    middleTemplate += "<tr>\n";
    middleTemplate += `<td>${tempStudentsNames[i]}</td>`
    for (let j = 0; j < totalSubjects; j++) {
      middleTemplate += `<td>${tempStudentsDegrees[i][j]}</td>`
    }
    middleTemplate += "<tr>\n";
  }
  lowerTemplate = "</table>";
  fullTemplate = `${upperTemplate}\n${middleTemplate}\n${lowerTemplate}`;
  table_div = document.getElementById("table_div");
  table_div.innerHTML = fullTemplate;
}
// get_all_degrees();

function get_marks() {
  upperTemplate = '<table id="marks">'
  + '<tr>'
  + '        <th rowspan="2" width="70%">Student Name</th> '
  + '        <th colspan="5">Marks</th> '
  + '      </tr> '
  + '      <tr> ';
  for (let i = 0; i < totalSubjects; i++) {
    upperTemplate += `        <th>${tempSubjectNames[i]}</th> `
  }
  upperTemplate += '      </tr> ';
  middleTemplate = "";
  for (let i = 0; i < tempTotalStudents; i++) {
    middleTemplate += "<tr>\n";
    middleTemplate += `<td>${tempStudentsNames[i]}</td>`
    for (let j = 0; j < totalSubjects; j++) {
      middleTemplate += `<td>${tempStudentsMarks[i][j]}</td>`
    }
    middleTemplate += "<tr>\n";
  }
  lowerTemplate = "</table>";
  fullTemplate = `${upperTemplate}\n${middleTemplate}\n${lowerTemplate}`;
  table_div = document.getElementById("table_div");
  table_div.innerHTML = fullTemplate;
}
// get_marks();

function get_student_status() {
  upperTemplate = '<table id="student_status">'
  + '      <tr> '
  + '        <th rowspan="2" width="70%">Student Name</th> '
  + '        <th colspan="5">Status</th> '
  + '      </tr> '
  + '      <tr> ';
  for (let i = 0; i < tempTotalSubjects; i++) {
    upperTemplate += `        <th>${subjectNames[i]}</th> `
  }
  upperTemplate += '      </tr> ';
  middleTemplate = "";
  for (let i = 0; i < tempTotalStudents; i++) {
    middleTemplate += "<tr>\n";
    middleTemplate += `<td>${studentsNames[i]}</td>`
    for (let j = 0; j < totalSubjects; j++) {
      middleTemplate += `<td>${studentsDegrees[i][j]>=50?"Pass":"Fail"}</td>`
    }
    middleTemplate += "<tr>\n";
  }
  lowerTemplate = "</table>";
  fullTemplate = `${upperTemplate}\n${middleTemplate}\n${lowerTemplate}`;
  table_div = document.getElementById("table_div");
  table_div.innerHTML = fullTemplate;
}
// get_student_status();

function get_gpa() {
  upperTemplate = "<table id='gpa'>"
  + '        <tr> '
  + '        <th width="70%">Student Name</th> '
  + '        <th>GPA</th> '
  + '        <th>GPA Mark</th> '
  + '      </tr> ';
  middleTemplate = "";
  for (let i = 0; i < tempTotalStudents; i++) {
    middleTemplate += "<tr>\n";
    middleTemplate += `<td>${studentsNames[i]}</td>`
    middleTemplate += `<td>${GPA[i]}</td>`
    middleTemplate += `<td>${GPA_Mark[i]}</td>`
    middleTemplate += "<tr>\n";
  }
  lowerTemplate = "</table>";
  fullTemplate = `${upperTemplate}\n${middleTemplate}\n${lowerTemplate}`;
  table_div = document.getElementById("table_div");
  table_div.innerHTML = fullTemplate;
}
// get_gpa();

function get_average() {
  upperTemplate = "<table id='average'>"
+ '        <tr> '
+ '          <th width="70%" colspan="2">Average</th> '
+ '        </tr> '
for (let i = 0; i < totalSubjects; i++) {
    upperTemplate += '        <tr> ';
    upperTemplate += `        <th>${subjectNames[i]}</th> `
    upperTemplate += `<td>${average[i]}</td>`
    middleTemplate += "<tr>\n";
  }
  lowerTemplate = "</table>";
  fullTemplate = `${upperTemplate}\n${lowerTemplate}`;
  table_div = document.getElementById("table_div");
  table_div.innerHTML = fullTemplate;
}
// get_average();

function get_top_last() {
  upperTemplate = "<table id='top_last'>"
  + '        <tr> '
  + '        <th width="100%" colspan="2">TOP & LAST STUDENTS</th> '
  + '      </tr> '
  + '      <tr id="top_st" class="skip"> '
  + '        <th>TOP STUDENT</th> '
  + `        <td>${studentsNames[top_index]}</td> `
  + '      </tr> '
  + '      <tr id="last_st" class="skip"> '
  + '        <th>LAST STUDENT</th> '
  + `        <td>${studentsNames[last_index]}</td> `
  + '      </tr> '
  + "   </table> ";
  table_div = document.getElementById("table_div");
  table_div.innerHTML = upperTemplate;
}
// get_top_least();