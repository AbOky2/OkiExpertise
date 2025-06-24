/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
    const [isOpen, setIsopen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        setIsopen(!isOpen);
    }

    const menuItems = [
        { href: "/", label: "Accueil" },
        { href: "#services", label: "Services" },
        { href: "#pourquoiNous", label: "Pourquoi Nous ?" },
        { href: "#contact", label: "Contact" }
    ];

    const hamburgerVariants = {
        top: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 }
        },
        middle: {
            closed: { opacity: 1 },
            open: { opacity: 0 }
        },
        bottom: {
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 }
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const menuItemVariants = {
        closed: { 
            opacity: 0, 
            x: -20,
            transition: { duration: 0.2 }
        },
        open: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                    scrolled 
                        ? 'bg-white shadow-lg backdrop-blur-md' 
                        : 'bg-transparent'
                }`}
            >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6 py-4">
                    {/* Logo */}
                    <motion.a 
                        href="/" 
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <img 
                                src="/bgOki.jpg" 
                                className="h-12 w-20 object-cover transition-transform duration-300 hover:scale-110" 
                                alt="Logo entreprise" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#25A5A0]/20 to-transparent"></div>
                        </div>
                        <span className={`text-xl font-bold transition-all duration-300 ${
                            scrolled 
                                ? 'bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] bg-clip-text text-transparent' 
                                : 'text-white'
                        }`}>
                            OKI EXPERTISE
                        </span>
                    </motion.a>

                    {/* Burger Button - Mobile */}
                    <motion.button 
                        onClick={handleClick}
                        className="relative z-50 flex flex-col justify-center items-center w-12 h-12 md:hidden rounded-full bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            className="block w-6 h-0.5 bg-white mb-1.5"
                            variants={hamburgerVariants.top}
                            animate={isOpen ? "open" : "closed"}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white mb-1.5"
                            variants={hamburgerVariants.middle}
                            animate={isOpen ? "open" : "closed"}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white"
                            variants={hamburgerVariants.bottom}
                            animate={isOpen ? "open" : "closed"}
                        />
                    </motion.button>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <ul className="flex space-x-8">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <motion.a 
                                        href={item.href} 
                                        className={`relative font-medium text-lg transition-colors duration-300 group ${
                                            scrolled 
                                                ? 'text-gray-700 hover:text-[#25A5A0]' 
                                                : 'text-white hover:text-gray-200'
                                        }`}
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.label}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] transition-all duration-300 group-hover:w-full"></span>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* CTA Button */}
                        <motion.a
                            href="https://wa.me/33751516642"
                            className="relative px-6 py-3 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-semibold rounded-full overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Nous contacter</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#2CC2BA] to-[#25A5A0]"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={`md:hidden backdrop-blur-md border-t transition-all duration-300 ${
                                scrolled 
                                    ? 'bg-white border-gray-200/50' 
                                    : 'bg-white/95 border-white/20'
                            }`}
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="px-6 py-6 space-y-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                    >
                                        <a 
                                            href={item.href}
                                            onClick={handleClick}
                                            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#25A5A0] hover:bg-gray-50/80 rounded-xl transition-all duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    </motion.div>
                                ))}
                                
                                {/* Mobile CTA */}
                                <motion.div
                                    custom={menuItems.length}
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="pt-4"
                                >
                                    <a
                                        href="https://wa.me/33751516642"
                                        onClick={handleClick}
                                        className="block w-full py-4 px-6 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-semibold text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Nous contacter
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}

export default Navbar