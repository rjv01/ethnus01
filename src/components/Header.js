function Header(props){
    return(
        <div>
            <h1>Header {props.name}</h1>
        </div>
    )
}

export function Footer(props){ //in function we call props as args
    return(
        <div>
            <h1>Footer {props.brand+"!"}</h1>
        </div>
    )
}

export default Header;