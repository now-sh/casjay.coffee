const axios = require('axios');

async function debugAPI() {
  console.log('Testing basemgr API response...\n');
  
  try {
    const response = await axios.get('https://api.casjay.coffee/api/v1/git/repos/basemgr', {
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    });
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    console.log('Data type:', typeof response.data);
    console.log('Data:', JSON.stringify(response.data, null, 2));
    
    // Test what useApi would see
    const data = response.data;
    console.log('\n--- Testing conditions ---');
    console.log('Array.isArray(data):', Array.isArray(data));
    console.log('typeof data:', typeof data);
    console.log('data has "repos" property:', 'repos' in data);
    console.log('data has "message" property:', 'message' in data);
    
    // Test a working org
    console.log('\n\nTesting casjay API response...\n');
    const response2 = await axios.get('https://api.casjay.coffee/api/v1/git/repos/casjay');
    console.log('Status:', response2.status);
    console.log('Data type:', typeof response2.data);
    console.log('Is array:', Array.isArray(response2.data));
    console.log('First item:', response2.data[0]?.name);
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.log('Response status:', error.response.status);
      console.log('Response data:', error.response.data);
    }
  }
}

debugAPI();