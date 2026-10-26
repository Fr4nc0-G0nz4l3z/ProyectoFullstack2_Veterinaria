
 // @vitest-environment jsdom

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Novedades from "../paginas/Novedades";

test("muestra correctamente las imagenes de novedades", () => {
  render(<Novedades />);

  const imagenes = screen.getAllByRole("img");

  expect(imagenes).toHaveLength(10);
});
