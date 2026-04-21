const { test } = require('@playwright/test');

// Test 1 – sanity
test('test1@sanity', async ({ page }) => {
  console.log('this is my test one');
});

// Test 2 – sanity
test('test2@sanity', async ({ page }) => {
  console.log('this is my test two');
});

// Test 3 – regression
test('test3@regression', async ({ page }) => {
  console.log('this is my test three');
});

// Test 4 – regression
test('test4@regression', async ({ page }) => {
  console.log('this is my test four');
});

// Test 5 – both sanity and regression
test('test5 @sanity @regression', async ({ page }) => {
  console.log('this is my test five');
});