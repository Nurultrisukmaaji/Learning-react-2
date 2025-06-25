import { useState } from "react"

export default function Toggle(){

    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return(
        <>
            {/* box change by click */}
            <div className={`mb-5 d-flex ${isActive ? 'box box-active' : 'box'}`}>
                <div className="m-auto">Tes Box</div>
            </div>
            <button onClick={() => toggleClass()} className="btn btn-primary">Change Box</button>

            {/* box change by hover */}
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`mt-5 d-flex ${isHovered ? 'box box-active' : 'box'}`}>
                <div className="m-auto">{isHovered ? 'Hover Box' : 'Box'}</div>
            </div>
        </>
    )
}