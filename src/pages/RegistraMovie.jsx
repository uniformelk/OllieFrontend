import { useState } from "react";
import Alerta from "../components/Alerta"
import FormPeliculas from "../components/FormPeliculas";
import clienteAxios from "../config/axios"

const RegistrarMovie = () =>{
    const [movieSearch, setMovieSearch] = useState('');
    const [alerta, setAlerta] = useState({});
    const [movies, setMovies] = useState({});
    const [movie, setMovie] = useState({});
    const [buscaID, setBuscaId] = useState(true);
    const [buscando, setBuscando] = useState(true);
    
    const {msg} = alerta;

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(movieSearch===''){
            setAlerta({
                msg: "Debes colocar un nombre para buscar la pelicula o serie", 
                error:true
            })
            return
        }
        setAlerta({
            msg: "",
        })
        try {
            const url = `/movies/findInfomovies/${movieSearch}`;
            const {data} = await clienteAxios(url);
            setMovies(data.results);
            //console.log(movies)
            setBuscando(false)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
        }
    }
    const handleClick = async (e) =>{
        const id = e.target.value;
        console.log(id);
        setBuscando(true)
        try {
            const url = `/movies/findInfomovie/${id}`;
            const {data} = await clienteAxios(url);
            setMovie(data);
            setBuscaId(false);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
        }
        
    }
    const handleSubmitRegister = async (e) =>{
        console.log(url)
    }
    return(
        <>
            <h2 className="text-4xl text-center text-primary">Registrar Pelicula</h2>
            <div className="w-1/2 m-auto pt-5">
                {msg && <Alerta alerta={alerta} />}
                <form className="w-full text-primary" onSubmit={handleSubmit}> 
                    <div className="my-5 ">
                        <label className="uppercase block text-xl font-bold">Nombre Pelicula</label>
                        <input type="text" placeholder="Nombre Pelicula" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={movieSearch} onChange={e=>setMovieSearch(e.target.value)}/>
                        <input type="submit" value="Buscar" className="bg-primary w-full py-3 px-10 rounded-xl text-white uppercase fornt-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap ">
            {!buscando && 
                movies.map((movie) =>{
                    const {title, release_date, poster_path, id} = movie;
                    let img =""
                    if(poster_path !== null){
                        img = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
                    }else{
                        img = `https://media.baamboozle.com/uploads/images/314129/1631974288_235720_url.jpeg`
                    }
                    return(
                        <div className="w-1/6 m-auto pt-5 flex">
                            <img src={img} alt="Img super mario" className="thumb"/>
                            <div className="m-3" >
                                <h3>{title} </h3>
                                <p>{release_date}</p>
                                <button  value={id} className="bg-primary w-full py-2 px-3 rounded-xl text-white uppercase fornt-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" onClick={handleClick} key={id}>Elegir</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <form className="flex flex-wrap w-4/5 m-auto" onSubmit={handleSubmitRegister}>
                { !buscaID   && <FormPeliculas movie={movie} />  } 
            </form>
        </>
    )
}

export default RegistrarMovie;