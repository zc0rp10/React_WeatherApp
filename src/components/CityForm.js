import React from "react";

export default function CityForm({ handleSubmit, handleChange, text }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    City
                </span>
                <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    onChange={handleChange}
                    value={text}
                />
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}
