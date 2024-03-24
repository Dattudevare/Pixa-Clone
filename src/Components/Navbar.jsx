import React from 'react'

function Navbar({ setsearch }) {
    return (
        <>

<div className="nav mt-3">
                <div className="button btn btn-outline-warning mx-3 class24"
                    onClick={() => setsearch("nature")}
                >Nature</div>
                <div className="button btn btn-outline-primary mx-3 class24"
                    onClick={() => setsearch("travel")}
                >Travel</div>
                <div className="button btn btn-outline-info mx-3 class24"
                    onClick={() => setsearch("city")}
                >City</div>
                <div className="button btn btn-outline-secondary mx-3 class24"
                    onClick={() => setsearch("car")}
                >Car</div>
                <div className="button btn btn-outline-warning mx-3 class24"
                    onClick={() => setsearch("fashion")}
                >Fashions</div>
                <div className="button btn btn-outline-light mx-3 class24">Animals</div>
                <div className="button btn btn-outline-dark text-light mx-3 class24"
                    onClick={() => setsearch("technology")}
                >Technology</div>
                <div className="button btn btn-outline-warning mx-3 class24"
                    onClick={() => setsearch("business & finance")}
                >Business & Finance</div>
                <div className="button btn btn-outline-primary mx-3 class24"
                    onClick={() => setsearch("Tokiyo")}
                >Tokiyo</div>
                <div className="button btn btn-outline-info mx-3 class24"
                    onClick={() => setsearch("dubai")}
                >Dubai</div>
                <div className="button btn btn-outline-success mx-3 class24"
                    onClick={() => setsearch("Animals")}
                >Animals</div>
                <div className="button btn btn-warning mx-3 class24"
                    onClick={() => setsearch("nature")}
                >Saved</div>
            </div>
           

            <div className="container my-4" style={{
                width: "100%"
            }}>
                <div className="mb-3 d-flex  "><div className="btn btn-primary border mx-2 px-5 text-align-center d-flex btn-none1">Search </div>
                    <input type="text" className="form-control  text-black text-golderod" placeholder='Search Images'
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setsearch(e.target.value)}


                    />
                </div>
            </div>
        </>
    )
}

export default Navbar