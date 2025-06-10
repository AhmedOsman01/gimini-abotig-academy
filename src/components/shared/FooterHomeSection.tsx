import React from 'react'

const FooterHomeSection = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                                <span className="text-xl font-bold">CodeCraft</span>
                            </div>
                            <p className="text-gray-400">
                                Empowering developers with modern web technologies.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Courses</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">HTML Basics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">CSS Mastery</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">JavaScript Pro</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">React Expert</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 CodeCraft. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterHomeSection