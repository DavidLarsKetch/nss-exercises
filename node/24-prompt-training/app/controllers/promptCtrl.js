"use strict";

const prompt = require('prompt'),
      { white, green } = require('colors'),
      { greetingMsg } = require('../views/welcome'),
      {
        newCourse,
        startEditing,
        buildEditingPrompt
      } = require('../views/prompts'),
      { printAllUpcoming } = require('../views/upcoming'),
      { replace } = require('../models/replace'),
      { getAllUpcoming, getByName } = require('../models/select');

prompt.delimiter = green(':');

// msg is used in generating the main menu choices
// fn is the function for kicking off the appropriate prompt.get
// prop contains the properties for a prompt
const options = [
  {
    msg: "create a new course",
    fn: function() {addCourse(this.prop)},
    prop: newCourse
  },
  {
    msg: "edit an existing course",
    fn: function() {editCourse(this.prop)},
    prop: startEditing
  },
  {
    msg: "remove a course",
    fn: function() {},
  },
  {
    msg: "view an upcoming course",
    fn: function() {}
  },
  {
    msg: "view all upcoming courses",
    fn: function() {allUpcoming()}
  },
  {
    msg: "view a past course",
    fn: function() {}
  },
  {
    msg: "view all past courses",
    fn: function() {}
  }
];

// This pattern is used to restrict main menu selections
// to the available options
const mainMenuPattern = () => new RegExp(`^[1-${options.length}]$`);

const selectAction = {
  name: "cli",
  description: white(greetingMsg(options)),
  pattern: mainMenuPattern(),
  hidden: true,
  message: "Please enter a number listed"
};

const start = () => {
  prompt.start();
  initial();
};

const initial = () =>
  prompt.get(selectAction, (err, {cli}) => {
    options[cli - 1].fn(); //Takes user input & selects from options[idx]
  });

const addCourse = prop =>
  prompt.get(prop, (err, result) => {
    err ? console.error(err) : replace(result);
    initial(); // Returns to initial after
  });

const editCourse = prop =>
  prompt.get(prop, (err, {find_course_name}) => {
    if (err) return console.error(err);
    getByName(find_course_name)
    .then(obj => {
      if (!obj) return console.log(`${find_course_name} not found`);
      return buildEditingPrompt(obj);
    })
    .then(prop => {
      prompt.get(prop, err => {
        if(err) console.error(err);
      });
    });
  });

const allUpcoming = () =>
  getAllUpcoming()
  .then(data => {
    console.log(printAllUpcoming(data));
    initial();
  })
  .catch(err => console.log(err));

module.exports = {addCourse, allUpcoming, options, start};
