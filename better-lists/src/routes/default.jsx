import { FaListUl } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Default = () => {
    return (
        <div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-body-tertiary rounded-3 overflow-auto">
            <h1 class="text-body-emphasis d-flex align-items-center p-3"><FaListUl size={35} className="me-3"/> better lists</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted px-3">
            This web app project was made to showcase my skills as a full stack web developer. The front end was made with React, styled with Bootstrap, and uses Redux for managing state. The backend was made with Express, and uses a custom RESTful API to update a local JSON database.
            </p>

            <div class="row pt-3">
                <div class="col-lg-4">
                    <FaReact size={110} style={{ color: "darkturquoise" }} />
                    <h2 class="fw-normal">React</h2>
                </div>
                <div class="col-lg-4">
                    <SiRedux size={110} style={{ color: "darkorchid" }} />
                    <h2 class="fw-normal">Redux</h2>
                </div>
                <div class="col-lg-4">
                    <SiExpress size={110} style={{ color: "gold" }} />
                    <h2 class="fw-normal">Express</h2>
                </div>
            </div>


        </div>
    );
} 

export default Default;