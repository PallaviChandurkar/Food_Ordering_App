const Contact = () => {
    return (
        <>
            <div className="w-[500px] mx-auto">
                <div className="text-center my-3 text-xl">Contact Page</div>
                <form>
                    <input className="border-2 border-neutral-400 rounded-lg p-2 mx-3 focus:outline-none" type="text" placeholder="Enter your name" />
                    <input className="border-2 border-neutral-400 rounded-lg p-2 mx-3 focus:outline-none" type="email" placeholder="Enter your email" />
                    <div className="w-[100px] mx-auto my-3">
                    <button className="bg-black text-white border-2 border-black rounded-lg p-2 cursor-pointer">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;