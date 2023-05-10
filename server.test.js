
const axios = require('axios')
const DogFacts = require('./server')
// import axios from 'axios'
// import DogFacts from './server';

jest.mock('axios');

test('should fetch dog facys', () => {
  const facts = ['dog fact1'];
  const resp = {data: {facts,success:true}};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return DogFacts.fetchData().then(data => expect(data).toEqual(facts));
});