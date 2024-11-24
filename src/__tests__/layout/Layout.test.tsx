import { render, screen } from "@testing-library/react";
import Layout from "../../layout/Layout";

describe("Layout Component", () => {
  test("renders children correctly", () => {
    const childText = "Test Child Component";

    render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test("renders the main tag", () => {
    const childText = "Test Main Content";

    render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();

    expect(mainElement).toHaveTextContent(childText);
  });
});
