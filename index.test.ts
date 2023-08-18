import { mockDate } from 'index'

describe('mockDate', () => {
  test('When mockDate is not applied, expect new Date() to be instance of Date class.', () => {
    expect(new Date()).toBeInstanceOf(Date)
  })

  describe('mockDate', () => {
    mockDate(new Date())

    test('When mockDate called, expect new Date() to be proper instance of Date class.', () => {
      expect(new Date()).toBeInstanceOf(Date)
    })
  })
})
