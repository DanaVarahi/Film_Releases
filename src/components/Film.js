const Film = ({url, children}) => {
    
    // console.log(children)
    return (
        
    <li><a href={url}>{children}</a></li>
    )
}

export default Film