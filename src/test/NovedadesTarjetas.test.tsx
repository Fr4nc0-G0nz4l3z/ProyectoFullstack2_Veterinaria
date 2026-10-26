
 // @vitest-environment jsdom

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Novedades from "../paginas/Novedades";

test("muestra correctamente las 10 tarjetas de novedades", () => {
  render(<Novedades />);

  const titulos = [
    "Campaña de vacunación",
    "Cortes de uñas",
    "Desparasitación",
    "Ecografía",
    "Alimentación saludable",
    "Adopción responsable",
    "Salud dental",
    "Chequeos veterinarios",
    "Prevención de la obesidad",
    "Cuidado de ojos y oídos"
  ];

  titulos.forEach((titulo) => {
    const novedad = screen.getByText(titulo);

    expect(novedad).toBeTruthy();
  });
});
