import { useState, type ChangeEvent, type FormEvent } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;
        const value =
            type === "checkbox" && e.target instanceof HTMLInputElement
                ? e.target.checked
                : e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl">
                        Have questions or need assistance? Reach out to our friendly team and we’ll respond promptly.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-10 rounded-2xl shadow-xl flex-1 space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border rounded-lg p-3 w-full focus:ring focus:ring-indigo-300"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border rounded-lg p-3 w-full focus:ring focus:ring-indigo-300"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:ring focus:ring-indigo-300"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:ring focus:ring-indigo-300"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:ring focus:ring-indigo-300"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full h-32 focus:ring focus:ring-indigo-300"
                        />

                        <label className="flex items-start space-x-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mt-1 accent-indigo-600"
                            />
                            <span>
                                I agree to receive information from the company. Read our
                                <a href="#" className="text-indigo-600 underline ml-1">Privacy Policy</a>.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg flex-1 flex flex-col justify-between space-y-6">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-indigo-600" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">Visit Us</p>
                                    <p className="text-gray-600 text-base">Jana Path, Lalitpur 44709</p>
                                    <p className="text-gray-600 text-base">Come visit our office and see our handmade carpets in person.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 text-indigo-600" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                                    <p className="text-gray-600 text-base">moderndesignnepal@gmail.com</p>
                                    <p className="text-gray-600 text-base">We respond within 24 hours on weekdays.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaPhone className="mt-1 text-indigo-600" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">Call Us</p>
                                    <p className="text-gray-600 text-base">(+977) 9801037585 <br /> Mon-Fri: 8:00 AM – 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Section */}
                        <div className="pt-4 border-t border-gray-900">
                            <p className="font-semibold text-gray-900 text-lg mb-2">Follow Us</p>
                            <div className="flex space-x-8 mb-2">
                                <FaFacebookF className="cursor-pointer text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110" />
                                <FaLinkedinIn className="cursor-pointer text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110" />
                                <FaInstagram className="cursor-pointer text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110" />
                                <FaTwitter className="cursor-pointer text-gray-600 hover:text-sky-400 transition-transform transform hover:scale-110" />
                            </div>
                            <p className="text-gray-600 text-base">
                                Stay connected with us on social media for updates, handmade carpet inspirations,
                                and exclusive behind-the-scenes content from our workshop.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
