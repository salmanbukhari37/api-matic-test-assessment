import { render, screen, fireEvent } from "@testing-library/react";
import TitleEditor from "../components/TitleEditor";

describe("TitleEditor Component", () => {
  const mockOnChange = jest.fn();

  test("renders the TextField when isEditing is true", () => {
    const title = "Editable Title";

    render(
      <TitleEditor isEditing={true} title={title} onChange={mockOnChange} />
    );

    const textField = screen.getByRole("textbox");
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue(title);
  });

  test("renders the Typography when isEditing is false", () => {
    const title = "Display Title";

    render(
      <TitleEditor isEditing={false} title={title} onChange={mockOnChange} />
    );

    const typography = screen.getByText(title);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName.toLowerCase()).toBe("h4");
  });

  test("calls onChange handler when the TextField value changes", () => {
    const title = "Editable Title";

    render(
      <TitleEditor isEditing={true} title={title} onChange={mockOnChange} />
    );

    const newValue = "Updated Title";
    const textField = screen.getByRole("textbox");

    fireEvent.change(textField, { target: { value: newValue } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(newValue);
  });

  test("does not call onChange when not in editing mode", () => {
    const title = "Display Title";

    render(
      <TitleEditor isEditing={false} title={title} onChange={mockOnChange} />
    );

    const typography = screen.getByText(title);
    expect(typography).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
