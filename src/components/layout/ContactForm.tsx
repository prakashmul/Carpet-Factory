import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

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

    // Fixed handleChange for TypeScript
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;

        const value =
            type === "checkbox" && e.target instanceof HTMLInputElement
                ? e.target.checked
                : e.target.value;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <div>
            <div className="text-center max-w-2xl mx-auto space-y-4 mt-10">
                <h1 className="text-3xl font-bold text-gray-900">Contact our team</h1>
                <p className="text-gray-700 text-base">
                    Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 24 hours.
                </p>
            </div>
            <div className="flex justify-center items-center bg-gray-50 p-6">
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Form Section - always first on mobile */}
                    <form onSubmit={handleSubmit} className="space-y-4 order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                        />

                        <textarea
                            name="message"
                            placeholder="Tell us what we can help you with"
                            value={formData.message}
                            onChange={handleChange}
                            className="border rounded-lg p-2 w-full h-28 focus:ring focus:ring-blue-300"
                        />

                        <label className="flex items-start space-x-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mt-1 accent-blue-600"
                            />
                            <span>
                                I’d like to receive more information about company. I understand and agree to the
                                <a href="#" className="text-blue-600 underline ml-1">Privacy Policy</a>.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Info Section - comes second on mobile, right on desktop */}
                    <div className="bg-gradient-to-b from-blue-500 to-blue-300 text-white rounded-2xl p-8 space-y-6 order-2 md:order-2">
                        <h2 className="text-2xl font-bold">Get in touch</h2>

                        <div>
                            <h3 className="font-semibold">Visit us</h3>
                            <p className="text-sm mt-1">Come visit our office.</p>
                            <p className="text-sm">Jana Path, Lalitpur 44709</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Chat to us</h3>
                            <p className="text-sm mt-1">Our friendly team is here to help.</p>
                            <p className="text-sm">moderndesignnepal@gmail.com</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Call us</h3>
                            <p className="text-sm mt-1">Sun-Fri from 8am to 8pm</p>
                            <p className="text-sm">(+977) 9801037585</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Social media</h3>
                            <div className="flex space-x-4 mt-2">
                                <FaFacebookF className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                                <FaLinkedinIn className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-300" />
                                <FaInstagram className="cursor-pointer text-gray-600 hover:text-pink-500 transition-colors duration-300" />
                                <FaTwitter className="cursor-pointer text-gray-600 hover:text-sky-400 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
