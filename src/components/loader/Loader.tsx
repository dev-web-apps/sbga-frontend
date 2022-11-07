import './Loader.css'
import { Logo } from '../../layout/dashborad/Logo'

function Loader(): ReactNode {
    return (
        <div className="loader-container">
            <div className="animatedLogo">
                <Logo
                    sx={{
                        height: 200,
                        width: 200,
                    }}
                />
            </div>
        </div>
    )
}

export default Loader
