import Work from '../../components/Work';
import WorkData from '../../data/work.json'
function Projects() {
	return (
		<>
			{/* <!--project start--> */}
			<section id="project" className="project">
				<div className="container">
					<div className="project-details">
						<div className="project-header text-left">
							<h2>Projects</h2>
							<p>
								These are some of the finished projects.
							</p>
						</div>
						{/* <!--/.project-header--> */}
						<div className="project-content">
							<div className="gallery-content">
								<div className="isotope">
									<div className="row">
										<div className=" col-md-12 col-sm-12">
											<div className="item big-height">
												<Work WorkData={WorkData[6]} />
												{/* <!-- /.isotope-overlay --> */}
											</div>
											{/* <!-- /.item --> */}
										</div>
										{/* <!-- /.col --> */}
										<div className=" col-md-12 col-sm-12">
											<div className="item big-height">
												<Work WorkData={WorkData[0]} />
												{/* <!-- /.isotope-overlay --> */}
											</div>
											{/* <!-- /.item --> */}
										</div>
										<div className="col-md-12 col-sm-12">
											<div className="row">
												<div className="col-sm-12 col-xs-12">
													<div className="item big-height">
														<Work WorkData={WorkData[1]} />
														{/* <!-- /.isotope-overlay --> */}
													</div>
													{/* <!-- /.item --> */}
												</div>
												{/* <!-- /.col --> */}
												<div className="col-sm-6 col-xs-12">
													<div className="item">
														<Work WorkData={WorkData[2]} />

														{/* <!-- /.isotope-overlay --> */}
													</div>
													{/* <!-- /.item --> */}
												</div>
												{/* <!-- /.col --> */}

												<div className="col-sm-6 col-xs-12">
													<div className="item">
														<Work WorkData={WorkData[3]} />
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
														<Work WorkData={WorkData[4]} />
														{/* <!-- /.isotope-overlay --> */}
													</div>
													{/* <!-- /.item --> */}
												</div>
												{/* <!-- /.col --> */}
												<div className="col-sm-6 col-xs-12">
													<div className="item">
														<Work WorkData={WorkData[5]} />
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