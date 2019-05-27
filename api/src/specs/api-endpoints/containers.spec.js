import { expect } from 'chai'

import x from '../../controllers/containers'

const { hello } = require('../../routes/greeting');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function (arg) {
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function () {
    describe('Hello() function', function () {
        it('Should error out if no name provided ', function () {
            hello(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});