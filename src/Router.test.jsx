import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Router } from "./Router";
import { getCurrentPath } from "./utils";

vi.mock('./utils.js', () => ({
  // gracias al metodo vi puedo mockear un archivo y convertirlo en una funcion del mismo
  getCurrentPath: vi.fn()
}))

describe('Router',() => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  })

  it('Should work', () => {
    expect(1).toBe(1)
  })

  it('Should render without problems', () => {
    render(<Router routes={[]}/>)
    expect(true).toBeTruthy()
  })

  it('Should render 404 if not routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404 Not Found!</h1>}/>)
    console.log(screen.debug())
    expect(screen.getByText('404 Not Found!')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    // mockear hacer mocks === datos de prueba forzados
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })
});
