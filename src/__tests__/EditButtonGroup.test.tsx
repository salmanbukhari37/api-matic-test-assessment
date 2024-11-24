import { render, screen, fireEvent } from "@testing-library/react";
import EditButtonGroup from "../components/EditButtonGroup";

describe("EditButtonGroup Component", () => {
  const mockOnSave = jest.fn();
  const mockOnEdit = jest.fn();
  const mockOnCancel = jest.fn();

  const defaultProps = {
    isEditing: false,
    onSave: mockOnSave,
    onEdit: mockOnEdit,
    onCancel: mockOnCancel,
  };

  test("matches snapshot when not editing", () => {
    const { container } = render(
      <EditButtonGroup {...defaultProps} isEditing={false} />
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot when editing", () => {
    const { container } = render(
      <EditButtonGroup {...defaultProps} isEditing={true} />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders Edit button when not editing", () => {
    render(<EditButtonGroup {...defaultProps} />);

    const editButton = screen.getByRole("button", { name: /edit/i });
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  test("renders Complete Edit and Cancel buttons when editing", () => {
    render(<EditButtonGroup {...defaultProps} isEditing={true} />);

    const completeEditButton = screen.getByRole("button", {
      name: /complete edit/i,
    });
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    expect(completeEditButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(completeEditButton);
    expect(mockOnSave).toHaveBeenCalledTimes(1);

    fireEvent.click(cancelButton);
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  test("does not call any handlers without interaction", () => {
    render(<EditButtonGroup {...defaultProps} isEditing={true} />);

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(mockOnCancel).not.toHaveBeenCalled();
    expect(mockOnEdit).not.toHaveBeenCalled();
  });
});
