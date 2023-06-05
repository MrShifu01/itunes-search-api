const axios = require('axios');
const { getResults } = require('../router.js');

test("Passes if the outcome equals 'song'", async () => {
  // Call the getResults function with parameters 'ed' and 'music'
  const outcome = await getResults('ed', 'music');

  // Expect the trackName of the first result to be 'Thinking Out Loud'
  expect(outcome.results[0].trackName).toBe('Thinking Out Loud');
});
