const chai = window.chai
const expect = chai.expect



describe('getText', () => {
    it('app should show text', () => {
        expect(getText()).to.have.string('Hello');
    })
})


describe('validateTodo', () => {
    it("returns false for empty todo", () => {
        expect(validateTodo("")).to.be.false;
    })
 })
describe('validateTodo', () => {
    it("returns false for todo without letters", () => {
        expect(validateTodo("1251234563246")).to.be.false;
    })
})
describe('validateTodo', () => {
    it("returns false for todo with numbers, letters, < 3 characters", () => {
        expect(validateTodo("a1")).to.be.false;
    })
})
describe('validateTodo', () => {
    it("returns true for todo with numbers, uppercase letters, and >= 3 characters", () => {
        expect(validateTodo("12512ASDFA")).to.be.true;
    })
})
describe('validateTodo', () => {
    it("returns true for todo with numbers, uppercase and lowercase letters, and >= 3 characters", () => {
        expect(validateTodo("12512ASDasdfasd")).to.be.true;
    })
})




