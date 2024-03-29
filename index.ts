export const mockDate = (data: string | number | Date): void => {
  const RealDate = global.Date

  beforeAll(() => {
    // @ts-expect-error: Type 'typeof Date' is not assignable to type 'DateConstructor'.
    global.Date = class extends RealDate {
      constructor () {
        super(data)
      }
    }
  })

  afterAll(() => {
    global.Date = RealDate
  })
}
