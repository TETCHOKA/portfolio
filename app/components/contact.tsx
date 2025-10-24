"use client";

import { useState } from "react";

function Contact(){
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const handleSubmit = (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            alert('Message envoyé avec succès !');
            setFormData({ name: '', email: '', subject: '', message: '' });
    
        };

    return(

        <>
             <section id="contact" className="py-20 px-6 relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-blue-500/20">
                            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Travaillons Ensemble
                            </h2>
                            <p className="text-center text-slate-400 mb-12 text-lg">
                            Un projet en tête ? Discutons-en !
                            </p>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                    type="text"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                    />
                                    <input
                                    type="email"
                                    placeholder="Votre email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Sujet"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                    className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                />
                                <textarea
                                    rows={6}
                                    placeholder="Votre message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm resize-none"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                                >
                                    Envoyer le message
                                </button>
                            </div>
                        </div>
                </div>
      </section>

        </>
    );
}

export default Contact;