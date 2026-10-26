// @vitest-environment jsdom
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import CardProductoM from "../componentes/moleculas/CardProductoM"

test("El juguete 1 (id 101) se muestra correctamente y contiene su className", () => {
    render(
        <MemoryRouter>
            <CardProductoM
            id={101}
            titulo={"Pack 3 ratones"}
            descripcion={"Pack de 3 ratones para gatos"}
            precio={5000}
            imagen={"/public/img/pack-ratones.jpg"} />
        </MemoryRouter>
    )

    const tituloElement = screen.getByRole("heading", { level: 5, name: "Pack 3 ratones" })
    const imagenElement = screen.getByAltText("Pack 3 ratones") as HTMLImageElement
    const contCard = tituloElement.parentElement?.parentElement

    expect(contCard?.className).toContain("card mx-auto my-2")

    expect(tituloElement.textContent).toBe("Pack 3 ratones")
    expect(screen.getByText("Pack de 3 ratones para gatos")).not.toBeNull()
    expect(screen.getByText(`$${5000}`)).not.toBeNull()
    expect(imagenElement.src).toContain("/public/img/pack-ratones.jpg")
})