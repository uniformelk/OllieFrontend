import { useState } from "react";
const FormPeliculas = ({movie}) =>{
    const {title, vote_average, genres, backdrop_path, poster_path, overview} = movie;
    const url = '';
    var genero = "";
    genres.forEach(element => {
        genero += `${element.name}, `;
    });

    const [registrar, setRegistrar] = useState({
        nombre: title,
        calificacion: vote_average,
        genero: genero,
        banner: backdrop_path,
        img: poster_path,
        description: overview,
        url: ""
    });

    return (
        <>
        <div className="w-1/2 m-auto p-5">
            <label className="uppercase block text-xl font-bold">Nombre</label>
            <input type="text" placeholder="Nombre Pelicula" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={title}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">Calificacion</label>
            <input type="text" placeholder="Director" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={vote_average}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">Genero</label>
            <input type="text" placeholder="Genero" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={genero}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">banner</label>
            <input type="text" placeholder="Banner" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={backdrop_path}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">Poster</label>
            <input type="text" placeholder="Poster" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={poster_path}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">Descripccion</label>
            <input type="textarea" placeholder="Descripcion" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" disabled value={overview}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
            <label className="uppercase block text-xl font-bold">Video</label>
            <input type="text" placeholder="Video" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={registrar.url} onChange={e=>setRegistrar.url(e.target.value)}/>
        </div>
        <div className="w-1/2 m-auto p-5 ">
        <input type="submit" value="Registrar" className="bg-primary w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-9 hover:cursor-pointer hover:bg-indigo-800" />
        </div>
        </>
                
            
    );
}

export default FormPeliculas;