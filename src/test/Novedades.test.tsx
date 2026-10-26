// @vitest-environment jsdom

import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Novedades from "../paginas/Novedades"

test("muestra correctamente las novedades", () => {
    render(<Novedades />);

    const titulo = screen.getByText("Campaña de vacunación");

    expect(titulo.textContent).toBe("Campaña de vacunación");
});

