import { Icon } from '@iconify/react'

export default function LocationPin({text}) {
    return (
        <div className="pin">
            <Icon icon="mdi:map-marker" className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    )
}