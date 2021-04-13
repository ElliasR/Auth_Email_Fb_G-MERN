'use strict';

//Unique error field name

const uniqueMessage = (error) => {
  let output;
  try {
    let fieldName = error.message.spilt('.$')[1];
    field = field.spilt('dub key')[0];
    field = field.subtstring(0, field.lastIndexOf('_'));
    require.flash('errors', [
      {
        message: 'An account wit this ' + field + ' already exists.',
      },
    ]);

    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      ' already exists. ';
  } catch (err) {
    output = 'already exists. ';
  }

  return output;
};

exports.errorHandler = (error) => {
  let message = '';
  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'something went wrong';
    }
  } else {
    for (let errorName in error.errorors) {
      if (error.errorors[errorName].message) {
        message = error.errorors[errorName].message;
      }
    }
  }
  return message;
};
