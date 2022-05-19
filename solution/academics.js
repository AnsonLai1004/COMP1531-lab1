const ERROR = { error: 'error' };

const dataStore = {
  academics: [
    {
      id: 10,
      name: 'Ada',
      hobby: 'music',
    },
    {
      id: 20,
      name: 'Ben',
      hobby: 'gym',
    },
    {
      id: 30,
      name: 'Cid',
      hobby: 'chess',
    },
    {
      id: 40,
      name: 'Dan',
      hobby: 'art',
    },
    {
      id: 50,
      name: 'Eva',
      hobby: 'yoga',
    },
  ],

  courses: [
    {
      id: 1511,
      name: 'COMP1511',
      description: 'Programming Fundamentals',
      staff_ids: [10, 20],
      member_ids: [10, 20, 30, 40, 50],
    },
    {
      id: 1521,
      name: 'COMP1521',
      description: 'Computer Systems Fundamentals',
      staff_ids: [20],
      member_ids: [20, 40, 50],
    },
    {
      id: 1531,
      name: 'COMP1531',
      description: 'Software Engineering Fundamentals',
      staff_ids: [20, 30],
      member_ids: [20, 30, 10, 40],
    },
  ],
};

// ========================================================================= //
// getNumAcademics
// ========================================================================= //

function getNumAcademics() {
  return {
    numAcademics: dataStore.academics.length,
  };
}

// ========================================================================= //
// getNumCourses
// ========================================================================= //

function getNumCourses() {
  return {
    numCourses: dataStore.courses.length,
  };
}

// ========================================================================= //
// getAcademicDetailsFromId
// ========================================================================= //

/**
 * Solution 1 - using for-of loop
 */
function getAcademicDetailsFromId(academicId) {
  for (const academic of dataStore.academics) {
    if (academic.id === academicId) {
      return {
        academic: {
          name: academic.name,
          hobby: academic.hobby,
        }
      };
    }
  }
  return ERROR;
}

/**
 * Solution 2 - using object.find
 */
// function getAcademicDetailsFromIdAlternative(academicId) {
//     const academic = dataStore.academics.find(a => a.id === academicId);
//     if (academic === undefined) {
//         return ERROR;
//     }
//     return {
//         academic: {
//             name: academic.name,
//             hobby: academic.hobby,
//         }
//     };
// }

// ========================================================================= //
// getCourseDetailsFromId
// ========================================================================= //

/**
 * Solution 1: Using for-of loop
 */
function getCourseDetailsFromId(courseId) {
  for (const course of dataStore.courses) {
    if (course.id === courseId) {
      return {
        course: {
          name: course.name,
          description: course.description,
        }
      };
    }
  }
  return ERROR;
}

/**
 * Solution 2 - using object.find
 */
// function getcourseDetailsFromIdAlternative(courseId) {
//     const course = dataStore.courses.find(c => c.id === courseId);
//     if (course === undefined) {
//         return ERROR;
//     }
//     return {
//         course: {
//             name: course.name,
//             description: course.description,
//         }
//     };
// }

// ========================================================================= //
// checkAcademicIsStaff
// ========================================================================= //

function checkAcademicIsMember(academicId, courseId) {
  const academic = dataStore.academics.find(a => a.id === academicId);
  const course = dataStore.courses.find(c => c.id === courseId);
  if (academic === undefined || course === undefined) {
    return ERROR;
  }
  return {
    isMember: course.member_ids.includes(academicId)
  };
}

// ========================================================================= //
// checkAcademicIsStaff
// ========================================================================= //

/**
 * Notice how this solution is very similar to checkAcademicIsMember?
 * Can you see a way to use a helper function to encapsulate the logic, then
 * simply call this helper function in both checkAcademicIsMember and
 * checkAcademicIsStaff (i.e. turn these check functions into wrappers)?
 */
function checkAcademicIsStaff(academicId, courseId) {
  const academic = dataStore.academics.find(a => a.id === academicId);
  const course = dataStore.courses.find(c => c.id === courseId);
  if (academic === undefined || course === undefined) {
    return ERROR;
  }
  return {
    isStaff: course.staff_ids.includes(academicId)
  };
}
