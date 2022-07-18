import { DotsThree } from "phosphor-react"

function Principal(){
    return(
        <>
            <div className="bg-neutral-900 w-5/6 h-72 block">

            <div className=" w-5/6 h-28 mt-3 ml-14 flex items-center gap-2 rounded-sm bg-gradient-to-r from-green-500 to-black">
                <img src="./src/img/img-album.jpg" className="w-24 ml-2 rounded-sm" alt="" />
                <div className=" w-36 h-20 text-white">
                    <p className="text-xs">ÁLBUM</p>
                    <h1 className="text-3xl">Justice</h1>
                    <p className="text-xs">Justin Bieber</p>
                    <p className="text-xs">OUÇA AGORA</p>
                </div>
                <div className="flex gap-2 mt-14">
                    <button className="bg-green-500 rounded-2xl text-black h-7 w-14 font-bold text-xs">Play</button>
                    <button className="bg-black rounded-2xl text-white h-7 w-14 font-bold text-xs border">Salvar</button>
                    <DotsThree className="text-white" size={16} />
                </div>
            </div>

            <h1 className="ml-14 mt-2 font-bold">Boa Noite</h1>
            <div className="ml-14 mt-2 flex flex-row gap-6">

                <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/Beatles.jpg" alt="" />
                    <h2 className="ml-2">Beatles</h2>
                </div>
                <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/Adele.jpg" alt="" />
                    <h2 className="ml-2">Adele</h2>
                </div>
                <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/Ed sheeran.jpg" alt="" />
                    <h2 className="ml-2">Ed Sheeran</h2>
                </div>
            </div>
            <div className="ml-14 mt-2 flex flex-row gap-6">
            <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/img-album.jpg" alt="" />
                    <h2 className="ml-2">Justin Bieber</h2>
                </div>
                <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/matue.jpg" alt="" />
                    <h2 className="ml-2">Matue</h2>
                </div>
                <div className="bg-stone-700 text-white w-40 h-12 rounded-sm flex items-center">
                    <img className="w-12 rounded-sm" src="./src/img/Queen.jpg" alt="" />
                    <h2 className="ml-2">Queen</h2>
                </div>
            </div>
            </div>
        </>
    )
}
export default Principal