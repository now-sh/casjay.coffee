// Test script to debug basemgr issue
const axios = require('axios');

async function testBasemgrAPI() {
  try {
    const response = await axios.get('https://api.casjay.coffee/api/v1/git/repos/basemgr');
    console.log('API Response:', JSON.stringify(response.data, null, 2));
    
    // Test the condition from the template
    const repos = response.data;
    console.log('\n--- Testing template conditions ---');
    console.log('repos:', repos);
    console.log('Array.isArray(repos):', Array.isArray(repos));
    console.log('!repos:', !repos);
    console.log('!Array.isArray(repos) && repos:', !Array.isArray(repos) && repos);
    console.log('typeof repos:', typeof repos);
    console.log('"message" in repos:', 'message' in repos);
    console.log('"github_profile" in repos:', 'github_profile' in repos);
    
    // Test the v-else-if condition
    const condition = !repos || (Array.isArray(repos) && repos.length === 0) || (!Array.isArray(repos) && repos);
    console.log('\nv-else-if condition result:', condition);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testBasemgrAPI();