// Simple test file to demonstrate testing functionality
// This is a basic example for testing

/**
 * Test function to verify basic functionality
 */
function testBasicFunctionality() {
    console.log('Running basic functionality test...');
    
    // Test 1: Simple assertion
    const expected = 'testing';
    const actual = 'testing';
    
    if (expected === actual) {
        console.log('✓ Test 1 passed: String comparison works');
    } else {
        console.log('✗ Test 1 failed: String comparison failed');
        return false;
    }
    
    // Test 2: Array operations
    const arr = [1, 2, 3, 4, 5];
    if (arr.length === 5) {
        console.log('✓ Test 2 passed: Array operations work');
    } else {
        console.log('✗ Test 2 failed: Array operations failed');
        return false;
    }
    
    // Test 3: Object operations
    const obj = { name: 'testing', value: 42 };
    if (obj.name === 'testing' && obj.value === 42) {
        console.log('✓ Test 3 passed: Object operations work');
    } else {
        console.log('✗ Test 3 failed: Object operations failed');
        return false;
    }
    
    console.log('\n✓ All tests passed!');
    return true;
}

// Run the tests
if (require.main === module) {
    const result = testBasicFunctionality();
    process.exit(result ? 0 : 1);
}

module.exports = { testBasicFunctionality };
