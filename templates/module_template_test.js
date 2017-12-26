import * as { module } from { package };
import { module } from { package };

describe('{ moduleName } unit tests', function() {
  describe('Some similar functions', function() {
    beforeEach() {
      // setup
    }

    afterEach() {
      // tear down
    }

    it ('Should do x, y and z', done => {
      module.someMethod.then(res => {
        expect(res).to.not.be.undefined;
        expect(res).to.be.a('{ value }');
        expect(res).to.have.property('{ prop }', '{ value }');
      }).catch(err => {
        expect(err).to.be.undefined;
      }).finally(() => {
        done();
      })
    })

  })

  describe('Some class methods', function() {
    beforeEach() {
      let myClass = new module.MyClass();
    }

    afterEach() {
      let myClass = null;
    }

    it ('Should do x, y and z', done => {
      let somethingAmazing = myClass.doSomethingAmazing();

      expect(somethingAmazing).to.not.be.undefined;
      expect(somethingAmazing).to.be.a('{ value }');
      expect(somethingAmazing).to.equal('{ value }');

      done();
    })
  })
})

describe('{ moduleName } integration tests', function() {
  describe('Some similar functions', function() {
    beforeEach() {
      // setup
    }

    afterEach() {
      // tear down
    }

    it ('Should do x, y and z', done => {
      module.someMethod.then(res => {
        expect(res).to.not.be.undefined;
        expect(res).to.be.a('{ value }');
        expect(res).to.have.property('{ prop }', '{ value }');
      }).catch(err => {
        expect(err).to.be.undefined;
      }).finally(() => {
        done();
      })
    })
  })
})
