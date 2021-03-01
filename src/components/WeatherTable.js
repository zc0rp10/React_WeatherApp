import React from "react";
import TableRow from "./TableRow";

export default function WeatherTable({ weatherArr }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date/Hour</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Pressure</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {weatherArr.map((w) => (
                    <TableRow key={w.dt} w={w} />
                ))}
            </tbody>
        </table>
    );
}
