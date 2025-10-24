function Footer(){

    return(

        <>
                 <footer className="py-12 px-6 border-t border-blue-500/20 backdrop-blur-lg">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-slate-400">
                            © { Date() } Tetchoka Portfolio.
                        </p>
                    </div>
                 </footer>
        </>
    );
}

export default Footer;