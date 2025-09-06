import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bannerImage from '../assets/image/home/image-1.jpg';
import '../App.css';

const HeroSection = () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/contact/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
            
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred.');
        }
    };


    return (
        <div className="relative text-black min-h-[80vh] bg-cover bg-center flex items-center px-10 py-20"
            style={{ backgroundImage: `url(${bannerImage})` }}>

            <div className="w-1/2 ml-12 first">
                <h1 className="text-4xl ml-12 font-bold mb-6">
                    Harness the Power of Online Marketing Backed by Exceptional Web Design & Smart SEO!
                </h1>
                <p className="italic text-lg">“Not just developers. Not just designers. We’re brand builders with a digital edge.”<br />~ Violet Infotech</p>
            </div>

            <div className="w-1/2 flex justify-end">
                <form
                    onSubmit={handleSubmit}
                    className="p-6 rounded-lg w-[350px] space-y-4 forms"
                >
                    <div className="flex gap-2">
                        <TextField
                            fullWidth
                            variant="filled"
                            label="First Name *"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: '#fff' } }}
                            InputProps={{ style: { color: '#fff' } }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Last Name *"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: '#fff' } }}
                            InputProps={{ style: { color: '#fff' } }}
                        />
                    </div>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        multiline
                        rows={3}
                        label="How can we help you? *"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        S U B M I T
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;
