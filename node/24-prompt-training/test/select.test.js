"use strict";

const { assert: { deepEqual, isNull, isTrue } } = require('chai'),
      { getAllUpcoming, getByName } = require('../app/models/select'),
      { getTodaySQLite } = require('../app/utils/getDate');

describe('select module', () => {
  describe('getAllUpcoming()', () => {
    it('should only return classes occurring after today\'s date', () =>
       getAllUpcoming()
       .then(data =>
         isTrue(data.every(
           ({start_date}) => start_date >= getTodaySQLite())
        )
      )
    );

    it('should return classes by course_name', () =>
      getByName("ES6 & Beyond")
      .then(data => deepEqual(data, {
            "course_id": 1,
            "course_name": "ES6 & Beyond",
            "no_of_seats": 30,
            "instructor_name": "Joe Shepherd",
            "start_date": "2017-06-01",
            "end_date": "2018-08-31",
            "course_category": "JavaScript"
          })
      )
    );

    it('should return an empty object when no course matches input',
      () =>
        getByName("Somethin' Goooood")
        .then(obj => isNull(obj))
    )
  });

});
