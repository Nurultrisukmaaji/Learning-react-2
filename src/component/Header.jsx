import { useState } from "react"

export default function Header() {

    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return(
        <>
            <h1>Header</h1>
            <div className={`mb-5 d-flex ${isActive ? 'box box-active' : 'box'}`}>
                <div className="m-auto">Tes Box</div>
            </div>
            <button onClick={() => toggleClass()} className="btn btn-primary">Change Box</button>

            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`mt-5 d-flex ${isHovered ? 'box box-active' : 'box'}`}>
                <div className="m-auto">{isHovered ? 'Hover Box' : 'Box'}</div>
            </div>
           
        </>
    )
}