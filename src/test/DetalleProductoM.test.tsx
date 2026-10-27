// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"

import DetalleProductoM from "../paginas/DetalleProductoM"

test("muestra correctamente los detalles de un juguete", () => {
    render(
        <MemoryRouter initialEntries={["/producto/101"]}>
            <Routes>
                <Route
                    path="/producto/:id"
                    element={<DetalleProductoM />}
                />
            </Routes>
        </MemoryRouter>
    )

    const titulo = screen.getByRole("heading", {
        name: "Pack 3 ratones"
    })

    expect(titulo.textContent).toBe("Pack 3 ratones")

    const imagen = screen.getByRole("img", {
        name: "Pack 3 ratones"
    })

    expect(imagen.getAttribute("src")).toBeTruthy()

    const precio = screen.getByText(/\$\s*5\.000/)

    expect(precio).toBeTruthy()
})