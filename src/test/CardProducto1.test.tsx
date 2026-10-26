// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import CardProductoM from "../componentes/moleculas/CardProductoM"

test("El medicamento 1 (id 1) se muestra correctamente y contiene su className", () => {
    render(
        <MemoryRouter>
            <CardProductoM
            id={1}
            titulo={"Amoxibay 250mg"}
            descripcion={"Amoxicilina"}
            precio={1000}
            imagen={"/public/img/amoxibay.jpg"} />
        </MemoryRouter>
    )

    const tituloElement = screen.getByRole("heading", { level: 5, name: "Amoxibay 250mg" })
    const imagenElement = screen.getByAltText("Amoxibay 250mg") as HTMLImageElement
    const contCard = tituloElement.parentElement?.parentElement

    expect(contCard?.className).toContain("card mx-auto my-2")

    expect(tituloElement.textContent).toBe("Amoxibay 250mg")
    expect(screen.getByText("Amoxicilina")).not.toBeNull()
    expect(screen.getByText(`$${1000}`)).not.toBeNull()
    expect(imagenElement.src).toContain("/public/img/amoxibay.jpg")
})