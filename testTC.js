var test = require('tape');

var request = (require('supertest'))('http://localhost:3000')

test('->Connexion', function(assert) {
  request
  .get('/user')
  .expect(200)
  .end( function(err, res) {
    if (err) { throw err; }
    //console.log("-->", res.body, res.body.length);
    assert.same(res.body.length, 20)
    assert.end();
   });
});

test('->Insertion', function (assert) {
  request
  .post('/user')
  .send({"name": "toto"})
  .expect(200)
  .end( function(err, res) {
    if (err) { throw err; }
    assert.same(res.body, {})
    assert.end();
  });
});



