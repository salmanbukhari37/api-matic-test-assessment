import { render, screen, fireEvent } from "@testing-library/react";
import SuccessSnackbar from "../components/SuccessSnackbar";

describe("SuccessSnackbar", () => {
  test("renders the snackbar with the given message when open", () => {
    const handleClose = jest.fn();
    const message = "Operation successful";

    render(
      <SuccessSnackbar open={true} message={message} onClose={handleClose} />
    );

    expect(screen.getByText(message)).toBeInTheDocument();

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test("does not render the snackbar when open is false", () => {
    const handleClose = jest.fn();
    const message = "Operation successful";

    render(
      <SuccessSnackbar open={false} message={message} onClose={handleClose} />
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("calls the onClose handler when auto-hide duration elapses", () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    const message = "Operation successful";

    render(
      <SuccessSnackbar open={true} message={message} onClose={handleClose} />
    );

    jest.advanceTimersByTime(3000);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls the onClose handler when close button is clicked", () => {
    const handleClose = jest.fn();
    const message = "Operation successful";

    render(
      <SuccessSnackbar open={true} message={message} onClose={handleClose} />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
