import "./index.css"

function Footer() {
	return (
		<>
			{/* <!-- footer-copyright start --> */}
			<footer className="footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="row">
								<div className="foot-copyright pull-left col-sm-10">
								<div className="col-sm-8">
								<p>
									&copy; {new Date().getFullYear()} by Lydia Loy. All Rights Reserved.
								</p>
								</div>
							

								<div className=" col-md-4">	<a className="footer-icon" href="https://www.linkedin.com/in/lydia-l-79819589/" target="_blank"><i className="fab fa-linkedin"></i></a>
								 	<a className="footer-icon" href="https://github.com/flowingcityloy" target="_blank"><i className="fa-brands fa-github"></i></a> 
							 	<a className="footer-icon" href="https://www.facebook.com/lydia.loy.336" target="_blank"><i className="fa-brands fa-facebook-square"></i></a></div>
								</div>
							</div>
							
							{/* <!--/.foot-copyright--> */}
						</div>
						 
					</div>
					{/* <!--/.row--> */}
					<div id="scroll-Top">
						<i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip"
							data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
					</div>
					{/* <!--/.scroll-Top--> */}
				</div>
				{/* <!-- /.container--> */}

			</footer>
			{/* <!-- /.footer-copyright-->
	<!-- footer-copyright end --> */}
		</>
	)
}

export default Footer;