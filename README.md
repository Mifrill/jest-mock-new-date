# jest-mock-new-date

How to use:

```ts
  import { mockDate } from 'jest-mock-new-date'

  describe('...', () => {
    const mockedDate = '2022-03-22T06:14:10.713Z'

    mockDate(mockedDate)
    
    test('...', () => {
      new Date(mockedDate)
    })
  })
```
