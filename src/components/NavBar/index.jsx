function NavBar({setCurrentPage}){
    return (
        <>
        <ul>
            <li><a href="#" onClick={()=>setCurrentPage("Home")}>Home</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("About")}>About</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Projects")}>Projects</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Contact")}>Contact</a></li>
        </ul>
        </>
    )
}
 

export default NavBar;