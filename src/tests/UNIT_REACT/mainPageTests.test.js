/* eslint-disable testing-library/await-async-query */
import ErrorPage from "../../Pages/Error";
import { render } from "../testsUtils";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";


test("filters are in document", ()=>{
    render(<ErrorPage/>);
    const el = screen.getByTestId("errorDiv")
    expect(el).toBeInTheDocument()
})  