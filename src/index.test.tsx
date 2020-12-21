import { Hide, Show, Each, Filter } from "./index"

describe("Index", () => {
  test("Check component imports", () => {
    expect(Hide).toBeTruthy()
    expect(Show).toBeTruthy()
    expect(Each).toBeTruthy()
    expect(Filter).toBeTruthy()
  })
})
