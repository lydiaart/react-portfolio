import './About.css'
function About(){
    return (
        <>
        	{/* <!--about-me start --> */}
	<section className="about-us">
		<div className="container">
			<div className="about-us-content">
				<div className="row">
					<div className="col-sm-6">
						<div className="single-about-us">
							<div className="about-us-txt">
								<h2>about me</h2>
								<p>
									
								</p>
								<div className="project-btn">
									<a href="#" className="project-view">View Projects
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="single-about-us">
							<div className="about-us-img">
								<img src="assets/images/about/about-part.jpg" alt="about me image"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        
        </>
    )
}

export default About;