function Projects(){
    return (
        <>
        {/* <!--project start--> */}
	<section id="project" className="project">
		<div className="container">
			<div className="project-details">
				<div className="project-header text-left">
					<h2>Finished Projects</h2>
					<p>
						These are some of the projects.
					</p>
				</div>
				{/* <!--/.project-header--> */}
				<div className="project-content">
					<div className="gallery-content">
						<div className="isotope">
							<div className="row">
								<div className=" col-md-12 col-sm-12">
									<div className="item big-height">
										<img src="assets/images/project/project2.png" alt="portfolio image" />
										<div className="isotope-overlay">
											<a href="https://emergency-center.herokuapp.com/">
												<span className="lnr lnr-link"></span>
											</a>
											<h3>
												<a href="https://emergency-center.herokuapp.com/">
													Emergency Center
												</a>
											</h3>
										</div>
                                        {/* <!-- /.isotope-overlay --> */}
									</div>
                                    {/* <!-- /.item --> */}
								</div>
                                {/* <!-- /.col --> */}
								<div className="col-md-12 col-sm-12">
									<div className="row">
										<div className="col-sm-6 col-xs-12">
											<div className="item">
												<img src="assets/images/project/project1.png" alt="portfolio image" />
												<div className="isotope-overlay">
													<a href="https://tbellenger.github.io/playlist/">
														<span className="lnr lnr-link"></span>

													</a>
													<h3>
														<a href="https://tbellenger.github.io/playlist/">
															Play List
														</a>
													</h3>
												</div>
                                                {/* <!-- /.isotope-overlay --> */}
											</div>
                                            {/* <!-- /.item --> */}
										</div>
                                        {/* <!-- /.col --> */}
										<div className="col-sm-6 col-xs-12">
											<div className="item">
												<img src="assets/images/project/project3.png" alt="portfolio image" />
												<div className="isotope-overlay">
													<a href="https://flowingcityloy.github.io/Work-Day-Scheduler/">
														<span className="lnr lnr-link"></span>

													</a>
													<h3>
														<a href="https://flowingcityloy.github.io/Work-Day-Scheduler/">
															Workday Scheduler
														</a>
													</h3>
												</div>
                                                {/* <!-- /.isotope-overlay --> */}
											</div>
                                            {/* <!-- /.item --> */}
										</div>
                                        {/* <!-- /.col --> */}
									</div>
                                    {/* <!-- /.row--> */}
									<div className="row">
										<div className="col-sm-6 col-xs-12">
											<div className="item">
												<img src="assets/images/project/project4.png" alt="portfolio image" />
												<div className="isotope-overlay">
													<a href="https://flowingcityloy.github.io/Coding-Quiz-Challenge/ ">
														<span className="lnr lnr-link"></span>

													</a>
													<h3>
														<a href="https://flowingcityloy.github.io/Coding-Quiz-Challenge/">
															Coding Quiz Challenge
														</a>
													</h3>
												</div>
                                                {/* <!-- /.isotope-overlay --> */}
											</div>
                                            {/* <!-- /.item --> */}
										</div>
                                        {/* <!-- /.col --> */}
										<div className="col-sm-6 col-xs-12">
											<div className="item">
												<img src="assets/images/project/project5.png" alt="portfolio image" />
												<div className="isotope-overlay">
													<a href="https://flowingcityloy.github.io/Password-Generator/">
														<span className="lnr lnr-link"></span>

													</a>
													<h3>
														<a href="https://flowingcityloy.github.io/Password-Generator/">
															Password Generator
														</a>
													</h3>
												</div>
                                                {/* <!-- /.isotope-overlay --> */}
											</div>
											{/* <!--/.item --> */}
										</div>
                                        {/* <!-- /.col --> */}
									</div>
                                    {/* <!-- /.row--> */}

								</div>
                                {/* <!-- /.col --> */}
							</div>
                            {/* <!-- /.row --> */}

						</div>
						{/* <!--/.isotope--> */}
					</div>
					{/* <!--/.gallery-content--> */}
				</div>
				{/* <!--/.project-content--> */}
			</div>
		</div>
		{/* <!--/.container--> */}

	</section>
	{/* <!--/.project--> */}
	{/* <!--project end--> */}
        </>
    )
}

export default Projects;