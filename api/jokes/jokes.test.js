const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')

test('is the correct environment for the tests', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})