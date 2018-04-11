"use strict";

const prompt = require("prompt");

const course = {
  properties: {
    course_name: {
      description: "Enter the course name",
      message: "Please use letters & numbers only",
      required: true
    },
    no_of_seats: {
      description: "Enter the number of seats",
      pattern: /^\d+$/,
      message: "Please enter numbers only",
      required: true
    },
    instructor_name: {
      description: "Enter the instructor name",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Please use letters only",
      required: true

    },
    start_date: {
      description: "Enter the start date YYYY-MM-DD",
      pattern: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      message: "Please enter a date in YYYY-MM-DD format",
      required: true
    },
    end_date: {
      description: "Enter the end date YYYY-MM-DD",
      pattern: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      message: "Please enter a date in YYYY-MM-DD format greater than the start date",
// Conform, here, enables the app to make sure that the end_date is actually
// after the start_date, asking the user to try again if not
      conform: function(end) {
        const val = prompt.history('start_date').value || prompt.history('start_date').default;
        const arr = [val, end].sort();
        return arr[0] === end ? false : true;
      },
      required: true
    },
    course_category: {
      description: "Enter the course category",
      pattern: /^[\w\s]+$/,
      message: "Please enter a course categoy",
      required: true
    }
  }
};

module.exports.newCourse = Object.create(course);

// This takes the course prompt properties above & adds a 'default' key:value
// pair to each. So, when a user is updating a product, they can hit 'Enter' to
// skip values they don't want to change.
module.exports.buildEditingPrompt = data =>
  new Promise((resolve, reject) => {
    const editingCourse = Object.create(course);
// This takes the data passed in (product from the DB) & loops over each prompt
// object in 'course', adding to the prompt object a 'default' key whose
// value is assigned to the value of according key in the data object
    Object.keys(editingCourse.properties).forEach(key =>
      editingCourse.properties[key].default = data[key]
    );
    resolve(editingCourse);
  });

module.exports.startEditing = {
  properties: {
    find_course_name: {
      message: "Find by course name",
      required: true
    }
  }
};
