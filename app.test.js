const { getData } = require('./app');
const axios = require('axios');
const { beforeEach, describe, expect, it } = require('@jest/globals');
jest.mock('axios');
describe('fetchData', () => {
    it('should parse and return data correctly', (done) => {

        const axiosResp = new Promise((resolve) => {
            resolve({
                data: [{ "status": { "verified": true, "feedback": "", "sentCount": 1 }, "_id": "5887e1d85c873e0011036889", "user": "5a9ac18c7478810ea6c06381", "text": "Cats make about 100 different sounds. Dogs make only about 10.", "__v": 0, "source": "user", "updatedAt": "2020-09-03T16:39:39.578Z", "type": "cat", "createdAt": "2018-01-15T21:20:00.003Z", "deleted": false, "used": true }, { "status": { "verified": true, "sentCount": 1 }, "_id": "588e746706ac2b00110e59ff", "user": "588e6e8806ac2b00110e59c3", "text": "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.", "__v": 0, "source": "user", "updatedAt": "2020-08-26T20:20:02.359Z", "type": "cat", "createdAt": "2018-01-14T21:20:02.750Z", "deleted": false, "used": true }, { "status": { "verified": true, "sentCount": 1 }, "_id": "58923f2fc3878c0011784c79", "user": "5887e9f65c873e001103688d", "text": "I don't know anything about cats.", "__v": 0, "source": "user", "updatedAt": "2020-08-23T20:20:01.611Z", "type": "cat", "createdAt": "2018-02-25T21:20:03.060Z", "deleted": false, "used": false }, { "status": { "verified": true, "sentCount": 1 }, "_id": "5894af975cdc7400113ef7f9", "user": "5a9ac18c7478810ea6c06381", "text": "The technical term for a cat’s hairball is a bezoar.", "__v": 0, "source": "user", "updatedAt": "2020-11-25T21:20:03.895Z", "type": "cat", "createdAt": "2018-02-27T21:20:02.854Z", "deleted": false, "used": true }, { "status": { "verified": true, "sentCount": 1 }, "_id": "58e007cc0aac31001185ecf5", "user": "58e007480aac31001185ecef", "text": "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.", "__v": 0, "source": "user", "updatedAt": "2020-08-23T20:20:01.611Z", "type": "cat", "createdAt": "2018-03-01T21:20:02.713Z", "deleted": false, "used": false }]
            })
        })

        axios.get.mockResolvedValue(axiosResp)
        getData(null, {
            send: (response) => {
                expect(response).toEqual([
                    'Cats make about 100 different sounds. Dogs make only about 10.',
                    'Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.',
                    "I don't know anything about cats.",
                    'The technical term for a cat’s hairball is a bezoar.',
                    'Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.'
                ]);
                done();
            }
        })

    })
})
