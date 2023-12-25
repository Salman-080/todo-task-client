import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="relative h-[600px] w-full">
                    <h2 className="absolute top-[40%] left-3 md:left-11 text-white text-md md:text-xl lg:text-3xl font-bold w-[200px] md:w-[300px] lg:w-[600px]">
                        Organize Tasks, Boost Productivity
                        <br />
                        Simplify Your Workflow with Our Task Management System
                    </h2>
                    <Link to="/login"><button className="btn bg-white border   absolute  bottom-5 md:top-[62%] left-[40%] md:left-11">Let's Explore</button></Link>
                    <div>

                    </div>
                    <img className="h-full w-full" src="/Capture.PNG" alt="" />

                </div>

            </div>


            <div className="mt-12 max-w-screen-xl mx-auto">
                <div className="text-center text-3xl font-bold mb-5">Frequently Asked Questions</div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Who are using and getting Benefits from SCC Technovision's Task Management Platform?
                    </div>
                    <div className="collapse-content">
                        <p>
                            1. Developers and Tech Teams:
                        </p>
                        <br />
                        <p>
                            2. Corporate Professionals:
                        </p>
                        <br />
                        <p>
                            3. Bankers and Finance Professionals:
                        </p>
                        <br />
                        <p>
                            4. Educators and Students:
                        </p>
                        <br />
                        <p>
                            5. Healthcare Professionals:
                        </p>
                        <br />
                        <p>
                            6. Project Managers in Various Industries:
                        </p>
                        <br /><br />
                        And many more
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;