import React from 'react'
import Loader from './Loader';
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Home({ images, loader, setsaved, saved }) {
    const saveImage = (img) => {
        let flag = true;

        if (saved !=null && saved.length > 0) {

            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag == false;
                    // react toastify
                    // console.log("image is already exist",)
                    toast.info(' image already saved  🦄!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        })
                    break;
                }
            }
            
            
        }
            if (flag) {
                
                setsaved(...saved, img)
                // console.log("imge saved")
                toast.success('🦄 image saved!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    })
            }
        }


    return (
        <>
        
<ToastContainer

/>
{/* Same as */}
<ToastContainer />
            {/* <Loader /> */}
            <div className="container-fluid" id="top">

                {loader ? (
                    <Loader />
                ) : (
                    <>
                        <div className="flex">
                            {

                                images.map((image) =>
                                    <div key={image.id} className='items' onClick={() => saveImage(image)}>
                                        <img src={image.src.medium} alt=" img .photographer" className='imag' />
                                    </div>
                                )
                            }
                        </div>

                    </>
                )
                }



                <div className='backto'>
                {images.length != 0 &&
                    <a href='#top' className="btn btn-warning text-center my-5 " >Back To Top</a>
                }
                </div>
            </div>
        </>
    )
}

export default Home;