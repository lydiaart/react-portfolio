import './About.css'
function About({setCurrentPage}){
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
									I wish to show you as cherry blossom, but you might see me as cactus.<br/>
									I wish to show you as a lion, but you might see me as a panda.<br/>
									I wish to be the stream of water, gently carry down the spring flowing towards the ocean.
								</p>
								<div className="project-btn">
									<a href="#" className="project-view" onClick={()=>setCurrentPage("Projects")}>View Projects
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