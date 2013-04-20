var EventEmitter = require('events').EventEmitter;

var arrr = function (array, id) {

  var ee = new EventEmitter();

  var change = function () {

    process.nextTick(function () {
      ee.emit('change');
    });

  };

  var _arrr = {

    index: function (_id) {
      var i, result;

      for (i = 0; i < array.length; i += 1) {
        if (array[i][id] === _id) {
          result = i;
          break;
        }
      }

      return result;
    },

    add: function (data) {

      var i = _arrr.index(data[id]);

      if (typeof i === 'undefined') {
        array.push(data);
        change();
      }

    },

    find: function (_id) {
      var i = _arrr.index(_id);
      return array[i];
    },

    all: function () {
      return array;
    },

    remove: function (_id) {
      var i = _arrr.index(_id);

      if (typeof i !== 'undefined') {
        array.splice(_arrr.index(_id), 1);
        change();
      }
    },

    clear: function () {
      array.length = 0;
      change();
    },

    update: function (data) {

      var key;
      var item = _arrr.find(data[id]);

      if (typeof item === 'undefined') {
        return _arrr.add(data);
      }

      for (key in data) {
        if (data.hasOwnProperty(key)) {
          item[key] = data[key];
        }
      }

      change();

    },

    on: ee.on.bind(ee)

  };

  return _arrr;

};

module.exports = arrr;
