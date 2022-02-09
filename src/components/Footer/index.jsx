function Footer() {
	return (
		<>
			{/* <!-- footer-copyright start --> */}
			<footer className="footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-sm-7">
							<div className="foot-copyright pull-left">
								<p>
									&copy; {new Date().getFullYear()} by Lydia Loy. All Rights Reserved.
								</p>
							</div>
							{/* <!--/.foot-copyright--> */}
						</div>
						<div classNamew="col-sm-10 pull-right">
							<div className="col-sm-1">	<a href="https://www.linkedin.com/in/lydia-l-79819589/"><i class="fab fa-linkedin"></i></a></div>
							<div className="col-sm-1">	<a href="https://github.com/flowingcityloy"><i class="fa-brands fa-github"></i></a></div>
							<div className="col-sm-4"></div>
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