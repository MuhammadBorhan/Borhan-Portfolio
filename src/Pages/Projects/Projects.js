import React from 'react';
import one from '../../images/CarManufacture/Capture1.PNG';
import two from '../../images/MaterialPurchase/Capture1.PNG';
import three from '../../images/LaptopWarehouse/Capture1.PNG';

const Projects = () => {
    return (
        <div className='project px-12 py-8 border-t-4' id='project'>
            <h1 className='text-3xl font-bold font-sans text-center mb-8'>My Latest Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <figure><img src={one} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Car Manufacture</h2>
                        <p>Website of the essential parts of any car manufacturing company.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://glowing-conkies-fc5384.netlify.app/">Live Preview</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/manufacturer-website-client-side-MuhammadBorhan">Client</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/manufacturer-website-server-side-MuhammadBorhan">Server</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <figure><img src={two} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Material Purchase</h2>
                        <p>Website of the essential products purchase from vendors.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://cheery-baklava-f9168f.netlify.app/">Live Preview</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/material-purchase-project">Client</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/material-purchase-server-side">Server</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <figure><img src={three} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Laptop Warehouse</h2>
                        <p className=''>Website of the essential laptops stocked from supplier for sale.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://scintillating-quokka-d477fd.netlify.app/">Live Preview</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/warehouse-management-client-side-MuhammadBorhan">Client</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="https://github.com/MuhammadBorhan/warehouse-management-server-side-MuhammadBorhan">Server</a>
                            </div>
                            <div class="badge badge-outline">
                                <a target="_blank" href="">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;