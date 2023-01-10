import { screen,render } from "@testing-library/react"
import '@testing-library/jest-dom';
import Footer from "../Footer";

test("Footer renders",() => {
    render(<Footer />)

    expect(screen.getByText(/master/)).toBeInTheDocument()
    expect(screen.getByText(/React Js/)).toBeInTheDocument()
    expect(screen.getByText(/Prettier/)).toBeInTheDocument()
})

export{}