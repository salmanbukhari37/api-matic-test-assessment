import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuList from "../components/MenuList";
import { AppRoute } from "../dto/types";

describe("MenuList Component", () => {
  const mockRoutes: AppRoute[] = [
    { path: "/page1", label: "Page 1", element: <div>Page 1 Content</div> },
    { path: "/page2", label: "Page 2", element: <div>Page 2 Content</div> },
    { path: "/page3", label: "Page 3", element: <div>Page 3 Content</div> },
  ];

  const renderComponent = (isEditing: boolean) => {
    render(
      <BrowserRouter>
        <MenuList routes={mockRoutes} isEditing={isEditing} />
      </BrowserRouter>
    );
  };

  it("renders all routes with labels correctly", () => {
    renderComponent(false);

    mockRoutes.forEach((route) => {
      expect(screen.getByText(route.label || "")).toBeInTheDocument();
    });
  });

  it("highlights the active route based on the current location", () => {
    window.history.pushState({}, "Test Page", "/page2");

    renderComponent(false);

    const activeRoute = screen.getByText("Page 2");
    expect(activeRoute).toHaveStyle("font-weight: 700");
  });

  it("disables interaction when `isEditing` is true", () => {
    renderComponent(true);

    const routeElements = screen.getAllByRole("link");
    routeElements.forEach((route) => {
      expect(route.parentElement).toHaveStyle("pointer-events: none");
      expect(route.parentElement).toHaveStyle("opacity: 0.5");
    });
  });

  it("enables interaction when `isEditing` is false", () => {
    renderComponent(false);

    const routeElements = screen.getAllByRole("link");
    routeElements.forEach((route) => {
      expect(route.parentElement).toHaveStyle("pointer-events: auto");
      expect(route.parentElement).toHaveStyle("opacity: 1");
    });
  });

  it("navigates to the correct route when clicked", () => {
    renderComponent(false);

    const link = screen.getByText("Page 1").closest("a");
    expect(link).toHaveAttribute("href", "/page1");
  });

  it("does not apply hover effects when `isEditing` is true", () => {
    renderComponent(true);

    const menuItem = screen.getByText("Page 1").closest("div");
    fireEvent.mouseOver(menuItem!);
    expect(menuItem).toHaveStyle("background-color: inherit");
  });

  it("applies hover effects when `isEditing` is false", () => {
    renderComponent(false);
    const menuItem = screen.getByText("Page 1").closest("div");
    fireEvent.mouseOver(menuItem!);
    expect(menuItem).toHaveStyle("background-color: #f0f0f0");
  });
});
