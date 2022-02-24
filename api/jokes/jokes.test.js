const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')
const Jokes = require('./jokes-model')

const joke1 = {
  joke: 'Why did the chicken run across the road?',
  punchline: 'To get to the other side faster.'
}

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db('jokes').truncate()
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

it('is the correct environment for the tests', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('jokes model functions', () => {
  describe('Jokes.getAll', () => {
    it('resolves to all jokes in the jokes table', async () => {
      const jokes = await Jokes.getAll()
      expect(jokes).toHaveLength(3)
    })
    it('resolves to the expected shape', async () => {
      const jokes = await Jokes.getAll()
      expect(jokes[0]).toHaveProperty('joke_id')
      expect(jokes[0]).toHaveProperty('joke')
      expect(jokes[0]).toHaveProperty('punchline')
    })
  })
  describe('Jokes.getById', () => {
    it('resolves to one joke', async () => {
      const joke = await Jokes.getById(1)
      expect(joke).toMatchObject({
        joke_id: 1,
        joke: 'What did the fish say when he swam into a wall?',
        punchline: 'Dam.'
      })
    })
  })
  describe('Jokes.create', () => {
    it('adds a new joke to the jokes table', async () => {
      await Jokes.create(joke1)
      const jokes = await Jokes.getAll()
      expect(jokes).toHaveLength(4)
    })
    it('resolves to the newly created joke', async () => {
      const newJoke = await Jokes.create(joke1)
      expect(newJoke).toMatchObject(joke1)
    })
  })
})

describe('jokes router functions', () => {
  describe('[GET] /api/jokes', () => {
    it('', async () => {
      expect(true).toBe(false)
    })
    it('', async () => {
      expect(true).toBe(false)
    })
  })
  describe('[GET] /api/jokes/:joke_id', () => {
    it('', async () => {
      expect(true).toBe(false)
    })
  })
  describe('[POST] /api/jokes', () => {
    it('', async () => {
      expect(true).toBe(false)
    })
    it('', async () => {
      expect(true).toBe(false)
    })
  })
})