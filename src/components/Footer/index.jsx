function Footer(){
return (
    <>
    	{/* <!-- footer-copyright start --> */}
	<footer className="footer-copyright">
		<div className="container">
			<div className="row">
				<div className="col-sm-7">
					<div className="foot-copyright pull-left">
						<p>
							&copy; All Rights Reserved. Designed and Developed by
							<a href="https://www.themesine.com">ThemeSINE</a>
						</p>
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