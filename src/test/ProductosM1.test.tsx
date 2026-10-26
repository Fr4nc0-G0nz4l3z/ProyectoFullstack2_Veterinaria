// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import ProductosM from "../paginas/ProductosM"

test("el contenedor principal tiene la clase d-sm-flex", () => {
    render(
        <MemoryRouter>
            <ProductosM />
        </MemoryRouter>
    )

    const titulo = screen.getByRole("heading", { level: 1, name: /Productos de mascotas/i })
    const contProducto = titulo.nextElementSibling

    expect(contProducto?.className).toContain("d-sm-flex")
})