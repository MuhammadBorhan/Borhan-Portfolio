import React from 'react';

const Contact = () => {
    return (
        <div className='px-12 py-8 border-t-4' id='contact'>
            <h1 className='text-3xl font-bold font-sans text-center'>Contact Me</h1>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-2xl font-bold"></h1>

                            <div class="flex flex-col w-full border-opacity-50">
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
                            <form>
                                <div class="card-body">
                                    <div class="form-control">
                                        <input type="text" placeholder="Name" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" placeholder="Email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Type Your Message' class="input input-bordered h-24"></textarea>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-primary">Send</button>
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