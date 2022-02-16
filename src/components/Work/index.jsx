function Work({WorkData}) {
    console.log(WorkData)
    return(
        <>
            <img className="photos w-100" src={WorkData.image_path} alt={WorkData.alt} />
            <div className="isotope-overlay">
                <a href={WorkData.live_link} target="_blank">
                    <span className="lnr lnr-link"></span>
                </a>
                <h3>
                    <a href={WorkData.live_link} target="_blank">
                        {WorkData.title}
                    </a>
                </h3>
                <br />

                <a href={WorkData.github} target="_blank">

                    <i className="fab fa-github-alt"></i>

                </a>




            </div>
        </>
    )
}

export default Work;