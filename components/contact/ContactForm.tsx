import { Button, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactForm () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        resetForm()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((curr) => ({
            ...curr,
            [name]: value
        }))
    }

    const resetForm = () => {
        setFormData(() => ({
            name: "",
            email: "",
            subject: "",
            message: "",
        }))
    }
    return (
        <form className="flex flex-col gap-8 text-gray-700 w-full max-w-[1300px]" onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Your Name (required)"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
            />

            <TextField
                name="email"
                label="Your Email (required)"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
            />

            <TextField
                name="subject"
                label="Subject (required)"
                variant="outlined"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                required
            />

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-500">
                    Your Message (required)*
                </label>
                <TextareaAutosize
                    name="message"
                    id="message"
                    minRows={6}
                    placeholder="Write your message..."
                    value={formData.message}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                />
            </div>
            <Button variant="contained" className="w-28" type="submit">Send</Button>
        </form>
    )
}