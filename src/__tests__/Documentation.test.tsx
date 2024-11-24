import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Documentation from "../components/Documentation";

jest.mock(
  "../components/PageRenderer",
  () =>
    ({ pageIndex }: { pageIndex: number }) =>
      <div data-testid="page-renderer">Page Index: {pageIndex}</div>
);

jest.mock("@mui/material", () => {
  const actual = jest.requireActual("@mui/material");
  return {
    ...actual,
    useMediaQuery: jest.fn(),
  };
});

describe("Documentation Component", () => {
  const theme = createTheme();

  test("renders correctly in large screens and matches snapshot", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Documentation />
      </ThemeProvider>
    );

    expect(screen.getByTestId("page-renderer")).toHaveTextContent(
      "Page Index: 0"
    );

    expect(screen.getByTestId("page-renderer").parentElement).toHaveStyle(
      "flex-direction: row"
    );

    expect(container).toMatchSnapshot();
  });

  test("renders correctly in small screens and matches snapshot", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Documentation />
      </ThemeProvider>
    );

    expect(screen.getByTestId("page-renderer")).toHaveTextContent(
      "Page Index: 0"
    );

    expect(screen.getByTestId("page-renderer").parentElement).toHaveStyle(
      "flex-direction: column"
    );

    expect(container).toMatchSnapshot();
  });
});
