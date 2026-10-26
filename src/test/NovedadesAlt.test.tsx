// @vitest-environment jsdom
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Novedades from "../paginas/Novedades";

test("las imagenes de novedades tienen su texto alternativo", () => {
  render(<Novedades />);

  const imagenes = screen.getAllByRole("img");

  expect(imagenes).toHaveLength(10);

  imagenes.forEach((imagen) => {
    expect(imagen.getAttribute("alt")).toBeTruthy();
  });
});
