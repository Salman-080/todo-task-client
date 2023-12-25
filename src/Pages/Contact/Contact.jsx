
const Contact = () => {
    return (
        <div>
            <div className=" mt-14 py-10 space-y-7">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl font-semibold ">Any Question Or Need Support?</h2>
                    <p className=" text-sm  font-medium">Feel free to reach out to us with any inquiries you may have; we're here to assist you around the clock!</p>
                </div>
                <div className="mx-auto  flex justify-center ">
                    <form className="bg-gray-300 px-6 py-10 w-[400px] md:w-[650px] space-y-3 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">

                            <div className="text-base space-y-1">
                                <h2>First Name</h2>
                                <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                            </div>
                            <div className="text-base space-y-1  w-full" >
                                <h2>Last Name</h2>
                                <input className="px-1 py-[5px] w-full" type="text" name="" id="" />
                            </div>

                        </div>


                        <div className="text-base space-y-1">
                            <h2>Email Address</h2>
                            <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                        </div>
                        <div className="text-base space-y-1">
                            <h2>Phone</h2>
                            <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                        </div>

                        <div className="text-base">
                            <h2>Notes</h2>
                            <textarea className="w-full px-1" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="flex justify-center"><button className="btn bg-black border  text-white"> Submit</button></div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;