let studentList = [
    { name: 'Bernard', age: 23, gender: 'male', exam_score: 56 },
    { name: 'Bukunmi', age: 27, gender: 'male', exam_score: 76 },
    { name: 'Lolade', age: 19, gender: 'female', exam_score: 47 },
    { name: 'Angelina', age: 25, gender: 'female', exam_score: 88 },
    { name: 'Rachael', age: 23, gender: 'female', exam_score: 69 },
    { name: 'Anuoluwa', age: 26, gender: 'female', exam_score: 83 },
    { name: 'lanre', age: 20, gender: 'male', exam_score: 48 },
    { name: 'Johnson', age: 18, gender: 'male', exam_score: 36 },
  ]
  
  let studentScoreBelow50 = studentList.filter((student) => {
    return student.exam_score <= 50
  })
  let femaleStudent = studentList.filter((student) => {
    return student.gender == 'female'
  })
  console.log(studentScoreBelow50) //lanre ,lolade,john
  console.log(femaleStudent) //anuoluwa,rachael,angelina,lolade