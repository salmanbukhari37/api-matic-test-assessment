import { render, screen, fireEvent } from "@testing-library/react";
import ExportButton from "../components/ExportButton";

describe("ExportButton Component", () => {
  const mockOnClick = jest.fn();

  test("renders correctly and matches snapshot", () => {
    const { container } = render(<ExportButton onClick={mockOnClick} />);
    expect(screen.getByRole("button", { name: /export/i })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("calls onClick handler when clicked", () => {
    render(<ExportButton onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /export/i });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    render(<ExportButton onClick={mockOnClick} disabled={true} />);

    const button = screen.getByRole("button", { name: /export/i });
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
