
 // @vitest-environment jsdom

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Novedades from "../paginas/Novedades";

test("muestra correctamente las descripciones de novedades", () => {
  render(<Novedades />);

  const descripcion = screen.getByText(
    "Mantén a tus mascotas protegidas con sus vacunas al día."
  );

  expect(descripcion.textContent).toBe(
    "Mantén a tus mascotas protegidas con sus vacunas al día."
  );
});
