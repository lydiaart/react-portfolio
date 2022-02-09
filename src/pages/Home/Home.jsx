function Home({setCurrentPage}) {
	return (
		<>
			{/* <!-- header-slider-area start --> */}
			<section className="header-slider-area">
				<div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">

					{/* <!-- Indicators --> */}
					<ol className="carousel-indicators">
						<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					</ol>

					{/* <!-- Wrapper for slides --> */}
					<div className="carousel-inner" role="listbox">
						<div className="item active">
							<div className="single-slide-item slide-1">
								<div className="container">
									<div className="row">
										<div className="col-sm-12">
											<div className="single-slide-item-content">
												<h2>Start New Journey<br /></h2>
												<p>
													With FlowingCity
												</p>

												<div className="single-contact-box">
													<div className="contact-form">

														<form>
															<div className="single-contact-btn">
																<button onClick={()=>setCurrentPage("About")}  className="contact-btn" type="submit">About Me</button>
															</div>
														</form>
													</div>
												</div>


											</div>
											{/* <!-- /.single-slide-item-content--> */}
										</div>
										{/* <!-- /.col--> */}
									</div>
									{/* <!-- /.row--> */}
								</div>
								{/* <!-- /.container--> */}
							</div>
							{/* <!-- /.single-slide-item--> */}
						</div>
						{/* <!-- /.item .active--> */}
						<div className="item">
							<div className="single-slide-item slide-2">
								<div className="container">
									<div className="row">
										<div className="col-sm-12">
											<div className="single-slide-item-content">
												<h2>
													Start New journey <br />
												</h2>
												<p>
													With FlowingCity
												</p>

												<div className="single-contact-box" onClick={()=>setCurrentPage("About")}>
													<div className="contact-form">

														<form>
															<div className="single-contact-btn">
																<button className="contact-btn" type="submit">About Me</button>
															</div>
														</form>
													</div>
												</div>



											</div>
											{/* <!-- /.single-slide-item-content--> */}

										</div>
										{/* <!-- /.col--> */}
									</div>
									{/* <!-- /.row--> */}
								</div>
								{/* <!-- /.container--> */}
							</div>
							{/* <!-- /.single-slide-item--> */}
						</div>
						{/* <!-- /.item .active--> */}
					</div>
					{/* <!-- /.carousel-inner--> */}

					{/* <!-- Controls --> */}
					<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						<span className="lnr lnr-chevron-left"></span>
					</a>
					<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						<span className="lnr lnr-chevron-right"></span>
					</a>
				</div>
				{/* <!-- /.carousel--> */}

			</section>
			{/* <!-- /.header-slider-area--> */}
			{/* <!-- header-slider-area end --> */}
		</>
	)
}

export default Home;