// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import BotonProductos from "../componentes/atomos/BotonProductosM"

test("el boton muestra el texto Volver a productos", () => {
    render(
        <MemoryRouter>
            <BotonProductos/>
        </MemoryRouter>
    )
    const boton = screen.getByText("Volver a productos")
    expect(boton.textContent).toBe("Volver a productos")
})