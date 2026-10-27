
// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"

import DetalleProductoM from "../paginas/DetalleProductoM"

test("muestra mensaje cuando el producto no existe", () => {
    render(
        <MemoryRouter initialEntries={["/producto/999"]}>
            <Routes>
                <Route
                    path="/producto/:id"
                    element={<DetalleProductoM />}
                />
            </Routes>
        </MemoryRouter>
    )

    const mensaje = screen.getByRole("heading", {
        name: "Producto no encontrado"
    })

    const descripcion = screen.getByText(
        "El producto seleccionado no existe."
    )

    const boton = screen.getByRole("link", {
        name: "Volver a productos"
    })

    expect(mensaje.textContent).toBe(
        "Producto no encontrado"
    )

    expect(descripcion.textContent).toBe(
        "El producto seleccionado no existe."
    )

    expect(boton.getAttribute("href")).toBe("/productos/")
})
