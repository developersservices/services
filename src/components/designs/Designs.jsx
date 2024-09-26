import React, { useState } from "react";
import './Style.css'
import { Link } from "react-router-dom";
import { IoArrowRedoOutline } from "react-icons/io5";

function Designs({card_name, param, cata, to}) {
    return(
        <>
        <div className="card_show">
            <div className="card_shop">
                <h2>{card_name}</h2>
                    <p>{param}</p>
                    <Link to={to} className="card_links">{cata} <IoArrowRedoOutline /></Link>
            </div>
        </div>
        </>
    )
}

export default Designs