import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_40t3cbh', 'template_nej6xfe', form.current, '6et-Yqyy95kVOjeVJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className='px-12 py-8 border-t-4' id='contact'>
            <h1 className='text-3xl font-bold font-sans text-center'>Contact Me</h1>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-2xl font-bold"></h1>

                            <div class="flex flex-col border-opacity-50 ml-0 md:ml-12">
                                <div class="grid h-20 card rounded-box place-items-center">
                                    <h3>If you have any information please E-Mail me.</h3>
                                </div>
                                <div class="divider">OR</div>
                                <div class="grid h-20 card rounded-box place-items-center">
                                    <p>Phone: <span>+8801402723759</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="card-body">
                                    <div class="form-control">
                                        <input type="text" name="user_name" placeholder="Name" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <input type="email" name="user_email" placeholder="Email" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <textarea name="message" id="" cols="30" rows="10" placeholder='Type Your Message' class="input input-bordered h-24" required></textarea>
                                    </div>
                                    <div class="form-control mt-6">
                                        <input class="btn btn-primary" type="submit" value="Send" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;