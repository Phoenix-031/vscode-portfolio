import { screen,render } from "@testing-library/react"
import '@testing-library/jest-dom';
import Topnav from "../Topnav";

test('Topnav renders correctly', () => {

    render(<Topnav />)

    expect(screen.getByText('File')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Selection')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
    expect(screen.getByText('Run')).toBeInTheDocument();
    expect(screen.getByText('Terminal')).toBeInTheDocument();
})

export {}