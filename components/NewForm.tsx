/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import emailjs from 'emailjs-com';

function NewForm() {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
        () => ({ lat: 48.86985397338867, lng: 2.3393890857696533 }),
        []
    );
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAM9FSjjuM8uXmuSBgXdSuNRGC1EewqDXU', 
        libraries: libraries as any,
    });

    // Pour gérer les champs de formulaire
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                'service_or639ye', 
                'template_fk8vsd6', 
                formData,
                'qKcJyyKxWnIVHYHrf' 
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message envoyé avec succès !');
                },
                (error) => {
                    console.log(error.text);
                    alert('Erreur lors de l\'envoi du message.');
                }
            );
    };

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div id="contact" className="bg-gradient-to-br from-gray-50 to-gray-100 flex p-6 md:flex-row flex-col">
            <div className="w-full p-4">
                <h1 className="md:text-5xl text-3xl font-bold text-center mb-8">
                    <span className="text-gray-800">Vous souhaitez nous </span>
                    <span className="bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] bg-clip-text text-transparent">rencontrer ?</span>
                </h1>
                {/* Informations de contact */}
                <div className="grid md:grid-cols-2 grid-cols-1 w-full mb-6 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg>
                        </div>
                        <div className="md:text-lg font-semibold text-gray-700">+33 7 69 59 12 20</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <div className="md:text-lg font-semibold text-gray-700">contact@okiexpertise.fr</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 md:col-span-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="md:text-lg font-semibold text-gray-700">9 Rue des Colonnes, 75002, Paris</div>
                    </div>
                </div>
                {/* Google Map */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 shadow-lg">
                    <GoogleMap
                        options={mapOptions}
                        zoom={14}
                        center={mapCenter}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '100%', height: '300px', borderRadius: '16px' }}
                    >
                        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
                    </GoogleMap>
                </div>
            </div>

            <div className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                <form className="w-full space-y-6" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#25A5A0] peer"
                            placeholder=" "
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#25A5A0]">
                            Email
                        </label>
                    </div>
                    {/* Other inputs */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#25A5A0] peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#25A5A0]">
                                Nom
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#25A5A0] peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#25A5A0]">
                                Prénom
                            </label>
                        </div>
                    </div>
                    {/* Phone and Message */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#25A5A0] peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#25A5A0]">
                                Téléphone
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-500">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="block p-2.5 w-full text-sm text-gray-900 rounded-xl border border-gray-300 focus:ring-[#25A5A0] focus:border-[#25A5A0] transition-all duration-300"
                            placeholder="Tapez votre message"
                            onChange={handleChange}
                            value={formData.message}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="relative px-8 py-3 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-[#25A5A0]/30 transition-all duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10">Envoyer le message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2CC2BA] to-[#25A5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewForm;
