import React from 'react'
import Loader from './Loader'

function Save({saved ,loader}) {
  return (
    <>
      <div className="container-fluid" id="top">

{loader ? (
    <Loader/>
) : (
    <>
        <div className="flex">
            {

                saved.map((image) =>
                    <div key={image.id} className='items'>
                        <img src={image.src.medium} alt=" img .photographer" className='imag' />
                    </div>
                )
            }
        </div>

    </>
)
}



{saved.length != 0 &&
    <a href='#top' className="btn btn-warning text-center my-5">Back To Top</a>
}
</div>
    </>
  )
}

export default Save