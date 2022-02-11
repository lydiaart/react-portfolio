import './Contact.css'
function Contact(){
    return (
        <>
        {/* <!--contact start--> */}
 
	<section className="contact">
		<div className="container">
			<div className="contact-details">
				<div className="section-header contact-head  text-center">
					<h2>contact me</h2>
				</div>
				{/* <!--/.section-header--> */}
				<div className="contact-content">
					<div className="row">
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-contact-box">
								<div className="contact-right">
									<div className="contact-adress">
										<div className="contact-office-address">
											<h3>contact info</h3>

											<div className="contact-online-address">
												<div className="single-online-address">
													<i className="fa fa-phone"></i>

													<span>(872) 301-6235</span>
												</div>
												{/* <!--/.single-online-address--> */}

												<div className="single-online-address">
													<i className="fa fa-envelope-o"></i>
													<span>flowingcityloy@gmail.com</span>
												</div>
												{/* <!--/.single-online-address--> */}
											</div>
											{/* <!--/.contact-online-address--> */}
										</div>

									</div>
									{/* <!--/.contact-address--> */}
								</div>
								{/* <!--/.contact-right--> */}
							</div>
							{/* <!--/.single-contact-box--> */}
						</div>
						{/* <!--/.col--> */}
						<div className="col-sm-5">
							<div className="single-contact-box">
								<div className="contact-form">
									<h3>Leave me a Massage Here</h3>
									<form>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="text" required className="form-control" id="firstname"
														placeholder="First Name" name="firstname"/>
												</div>
												{/* <!--/.form-group--> */}
											</div>
											{/* <!--/.col--> */}
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="text" required className="form-control" id="lastname"
														placeholder="Last Name" name="laststname"/>
												</div>
												{/* <!--/.form-group--> */}
											</div>
											{/* <!--/.col--> */}
										</div>
										{/* <!--/.row--> */}
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="email" required className="form-control" id="email"
														placeholder="Email" name="email"/>
												</div>
												{/* <!--/.form-group--> */}
											</div>
											{/* <!--/.col--> */}
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="text" className="form-control" id="phone"
														placeholder="Phone" name="phone"/>
												</div>
												{/* <!--/.form-group--> */}
											</div>
											{/* <!--/.col--> */}
										</div>
										{/* <!--/.row--> */}
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea required className="form-control" rows="7" id="comment"
														placeholder="Message"></textarea>
												</div>
												{/* <!--/.form-group--> */}
											</div>
											{/* <!--/.col--> */}
										</div>
										{/* <!--/.row--> */}
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn pull-right">
													<button className="contact-btn" type="submit">send message</button>
												</div>
												{/* <!--/.single-single-contact-btn--> */}
											</div>
											{/* <!--/.col--> */}
										</div>
										{/* <!--/.row--> */}
									</form>
									{/* <!--/form--> */}
								</div>
								{/* <!--/.contact-form--> */}
							</div>
							{/* <!--/.single-contact-box--> */}
						</div>
						{/* <!--/.col--> */}
					</div>
					{/* <!--/.row--> */}
				</div>
				{/* <!--/.contact-content--> */}
			</div>
			{/* <!--/.contact-details--> */}
		</div>
		{/* <!--/.container--> */}

	</section>
	{/* <!--/.contact--> */}
 
        </>
    )
}

export default Contact;