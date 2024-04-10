// Define the object map
let courses = {
    170: {
       title: "Introduction to Programming",
       description: "Develop algorithms for computers",
       creditHours: 5      
       },
    250: {
       title: "Web Development",
       description: "Build web applications",
       creditHours: 3      
       },
    310: {
       title: "Operating Systems",
       description: "Process management",
       creditHours: 3      
       },
    430: {
       title: "Artificial Intelligence",
       description: "Simulate human thinking",
       creditHours: 2      
       }
    };
 
 // Display course number and title for 3 credit hour courses
 for (let courseDetail in courses) {
    if (courses[courseDetail].creditHours == 3) {
       console.log(courseDetail + ": " + courses[courseDetail].title);
       }
    }
 