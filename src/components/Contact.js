const Contact = () => {
    return (
        <div>  
        <h1 className="text-center text-2xl p-5">Contact</h1>  
        <div className="text-center">
            <form className="mx-auto">
                <input type="text" className="border-2 p-2 m-2 w-3/12" placeholder="name" /><br />
                <input type="text" className="border-2 p-2 m-2 h-20 w-3/12" placeholder="message" /><br />
                <button className="py-2 px-4 m-2 bg-gray-400">Submit</button>
            </form>
        </div>   
        </div>
    )
}


export default Contact;
