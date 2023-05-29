import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Weather from "./Weather";

jest.mock("axios");

describe("Weather Component Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetch weather data and sets state on the form submit", async () => {
    const response = {
      data: {
        location: "london",
        temp: "25C",
      },
    };

    const axiosMock = axios.get.mockResolvedValueOnce(response);

    render(<Weather />);

    const locationInput = screen.getByPlaceholderText("Enter location");
    const searchButton = screen.getByRole('button', {name: "Search"});

    fireEvent.change(locationInput, {target: {value: "london"}});
    fireEvent.click(searchButton);

    expect(axiosMock).toHaveBeenLastCalledWith("http://localhost:3500/london");

    // Wait for API response
    await waitFor(() => {
        expect(screen.getByText("Weather Information for london")).toBeInTheDocument();
        expect(screen.getByText("Temperature 25C")).toBeInTheDocument();
    });
  });

  test("handles error when fetching data", async () => {
    const errorResponse = {
        data:{
            message: "Error fetching weather data"
        }
    }

    const axiosMock = axios.get.mockRejectedValueOnce(errorResponse);

    render(<Weather />);

    const locationInput = screen.getByPlaceholderText("Enter location");
    const searchButton = screen.getByRole('button', {name: "Search"});

    fireEvent.change(locationInput, {target: {value : "london"}});
    fireEvent.click(searchButton);

    expect(axiosMock).toHaveBeenCalledWith("http://localhost:3500/london")

    await waitFor(() => {
        expect(screen.getByText("Error fetching weather data, Please try again later"))
    })


  });

});
