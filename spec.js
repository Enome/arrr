var arrr = require('./index');

describe('Arrr', function () {

  describe('Add', function () {

    it('adds an item', function () {

      var array = [];
      var data = arrr(array, 'url');
      data.add({ url: 'hello' });
      array.should.eql([ { url: 'hello' } ]);

    });

    it('adds an item if it doesnt already exists', function () {

      var array = [ { url: 'hello' } ];
      var data = arrr(array, 'url');
      data.add({ url: 'hello' });
      array.should.eql([ { url: 'hello' } ]);

    });

    it('triggers on change event', function (done) {

      var array = [];
      var data = arrr(array, 'url');
      data.on('change', done);
      data.add({ url: 'hello' });

    });

  });

  describe('Find', function () {

    it('finds the item by id', function () {

      var array = [ { url: 'hello' }];
      var data = arrr(array, 'url');
      data.find('hello').should.eql({ url: 'hello' });

    });

  });

  describe('All', function () {

    it('returns the array', function () {
      arrr([ { url: 'hello' } ], 'url').all().should.eql([ { url: 'hello' } ]);
    });

  });

  describe('Remove', function (id) {

    it('removes the item by id', function () {

      var array = [ { url: 'hello' }];
      var data = arrr(array, 'url');
      data.remove('hello');
      array.should.eql([]);

    });

    it('removes doesnt remove an item if the id was not found', function () {

      var array = [ { url: 'hello' }];
      var data = arrr(array, 'url');
      data.remove('hi');
      array.should.eql([ { url: 'hello' } ]);

    });

    it('triggers on change event', function (done) {

      var array = [ { url: 'hello' }];
      var data = arrr(array, 'url');
      data.remove('hello');
      data.on('change', done);

    });

  });

  describe('clear', function () {

    it('removes all the items', function () {

      var array = [ { url: 'hi' }, { url: 'hello' }];
      var data = arrr(array, 'url');
      data.clear();
      array.should.eql([]);

    });

    it('triggers on change event', function (done) {

      var array = [ { url: 'hi' }, { url: 'hello' }];
      var data = arrr(array, 'url');
      data.clear();
      data.on('change', done);

    });

  });

  describe('Update', function () {
    
    it('updates the item in the array', function () {

      var array = [ { url: 'hello', name: 'sup' }];
      var data = arrr(array, 'url');
      data.update({ url: 'hello', name: 'whatsup' });
      array.should.eql([ { url: 'hello', name: 'whatsup' }]);

    });

    it('adds the item if it doesnt exist', function () {

      var array = [ { url: 'hello', name: 'sup' }];
      var data = arrr(array, 'url');
      data.update({ url: 'hi', name: 'whatsup' });
      array.should.eql([ { url: 'hello', name: 'sup' }, { url: 'hi', name: 'whatsup' } ]);

    });

    it('triggers on change event', function (done) {

      var array = [ { url: 'hello', name: 'sup' }];
      var data = arrr(array, 'url');
      data.update({ url: 'hello', name: 'whatsup' });
      data.on('change', done);

    });

  });

});
