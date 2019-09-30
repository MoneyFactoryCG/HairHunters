const Validator = require('jsonschema').Validator;

Validator.prototype.customFormats.date = input => {
  const regex = /^(([0-2]?\d{1})|([3][0,1]{1})).[0,1]?\d{1}.(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/g;
  return regex.exec(input);
};

const v = new Validator();

module.exports = Obucheniye = instance => {
  const schema = {
    courses_date: {
      type: 'string',
      format: 'date',
    },
  };
  return v.validate(instance, schema);
};
