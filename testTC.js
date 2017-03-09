var test = require('tape');

var request = (require('supertest'))('http://localhost:3000')

test('->Connexion', function(assert) {
  request
  .get('/user')
  .expect(200)
  .end( function(err, res) {
    if (err) { throw err; }
    assert.same(res.body.length, 21)
    assert.end();
   });
});

// test('->Insertion', function (assert) {
//   request
//   .post('/user')
//   .send({"name": "toto"})
//   .expect(200)
//   .end( function(err, res) {
//     if (err) { throw err; }
//     assert.same(res.body, {})
//     assert.end();
//   });
// });


// test('->Get', function (assert) {
//   request
//   .get('/project/56a112e89ace319342ce09eb')
//   .expect(200)
//   .end( function(err, res) {
//     if (err) { throw err; }
//     assert.same(res.body.name, 'G9 Wotoy')
//     assert.end();
//   });
// });
