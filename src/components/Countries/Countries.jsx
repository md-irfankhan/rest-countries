import { useState } from "react";

const Countries = ({ countries ,visited,setVisited}) => {
    // console.log(countries)
    const { name, flags, capital, currencies ,languages} = countries;
    
    function handleVisit(countries) {
        if(!visited.includes(countries)){
            setVisited([countries,...visited]);
           
        }
        
    }
    return (
        <div>
            <div className="card bg-base-100 w-full m-8 shadow-sm">
                <figure>
                    <img className="h-[200px]"
                        src={flags.png}
                        alt={flags.alt} />
                </figure>
                <div className="card-body p-1">
                    <h2 className="card-title">{name.common}</h2>
                    <div className="grid grid-cols-2">
                        <p><span className="font-bold text-[#77BEF0]">Capital: </span>{capital[0]}</p>
                        <p><span className="font-bold text-[#77BEF0]">Currency:</span>
                            {/* {console.log(Object.entries(currencies)) } */}
                            {Object.entries(currencies).map(([key, val]) => (
                                
                                    <>
                                        {key} – {val.name} ({val.symbol})
                                    </>
                              
                            ))}
                        </p>
                        <p><span className="font-bold text-[#77BEF0]">Language:</span>
                        {
                            Object.entries(languages).map(([key,val])=>(
                               <>
                                  {val},
                               </>
                            ))}
                        
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>{handleVisit(countries)}}>{visited.includes(countries)?'Visited':'Visit'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;