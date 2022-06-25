import '../Style.css'

export const Light = ({color, light}) => {
    return (
        <div>
            <div 
                className="light" 
                style={{backgroundColor : color === light ? color : "grey"}}
            ></div>
        </div>
    )
}