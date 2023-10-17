import { validateEmail } from "../../Pages/LoginForm"


test('function of validating emails', ()=>{
    const result = validateEmail("email@mail.ru")

    expect(result).toBe(true)
})