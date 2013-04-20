# Arrr

Data collection for objects with a change event when stuff gets pushed to it.

```js
var arrr = require('arrr');

// First param of arrr is the base array for storing the data. 
// Second param is the id to find, remove, update objects.

var collection = arrr([], 'id');

collection.add({ id: '1234', name: 'foo' }); // id is unique objects with the same id wont be added
collection.find('1234');
collection.all();
collection.update({ id: '1234', name: 'bar' }); // will insert if id isn't found
collection.remove('1234');
collection.clear(); // remove everything
```
