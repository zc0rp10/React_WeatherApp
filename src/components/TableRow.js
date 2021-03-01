import React from "react";

export default function TableRow({ w }) {
    let d = new Date(w.dt * 1000);

    return (
        <tr key={w.dt}>
            <th scope="row">{d.toUTCString()}</th>
            <td>{Math.round(w.temp)}</td>
            <td>{w.pressure}</td>
            <td>
                {w.weather[0].description == "clear sky"
                    ? "🌞 " + w.weather[0].description
                    : "😭 " + w.weather[0].description}
            </td>
        </tr>
    );
}
