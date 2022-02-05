function NavBar({setCurrentPage}){
    return (
        <>
        	<section id="menu">
		<div className="container">
			<div className="menubar">
				<nav className="navbar navbar-default">

					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation.</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="index.html">
							{/* <!-- <img src="assets/images/logo/logo.png" alt="logo"> --> */}
						</a>
					</div>
					{/* <!--/.navbar-header --> */}

					{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
                        <li><a href="#" onClick={()=>setCurrentPage("Home")}>Home</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("About")}>About</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Projects")}>Projects</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Contact")}>Contact</a></li>
            <li><a href="/assets/document/lydia_resume.pdf" target="_blank" >Resume</a></li>

						</ul>
                        {/* <!-- / ul --> */}
					</div>
                    {/* ><!-- /.navbar-collapse --> */}
				</nav>
				{/* <!--/nav --> */}
			</div>
			{/* <!--/.menubar --> */}
		</div>
        {/* <!-- /.container --> */}

	</section>
        {/* <ul>
            <li><a href="#" onClick={()=>setCurrentPage("Home")}>Home</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("About")}>About</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Projects")}>Projects</a></li>
            <li><a href="#" onClick={()=>setCurrentPage("Contact")}>Contact</a></li>
        </ul> */}
        </>
    )
}
 

export default NavBar;