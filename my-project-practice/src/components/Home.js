import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="relative flex h-screen  overflow-hidden">
                    <div className="relative z-20  text-white bg-opacity-50 rounded-xl">
                        <Navbar />
                    </div>
                    <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                            type="video/mp4" />
                    </video>

                    {/* <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.1);"> */}
                    {/* <div className="flex justify-center items-center h-full"> */}
                        <div className="text-white text-center px-14 px-md-0">
                            <h2 className="text-3xl font-semibold mb-4">Clicky Intern and Trainee</h2>
                            <h5 className="text-lg font-semibold mb-6">Best & free guide of responsive web design</h5>
                            <div className="md:space-x-2">
                                <a type="button"
                                    className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    href="./register" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Registration</a>
                                <a type="button"
                                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black-900 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    href="./login" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Login Here  !</a>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
                </header>
                
            </div>
        )
    }
}
