import { ArrowCircleDown, Books, DotsThree, HeartStraight, House, MagnifyingGlass, Plus, PlusCircle } from "phosphor-react";

function Sidebar(){
    return(
        <>
            <div className="bg-black w-1/5 h-72">
                <div className="mt-1 ml-2">
                    <DotsThree className="text-white cursor-pointer" size={16} />
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <House size={16} />
                        <p className="cursor-pointer">Início</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <MagnifyingGlass size={16} />
                        <p className="cursor-pointer">Buscar</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <Books size={16} />
                        <p className="cursor-pointer">Sua Biblioteca</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-4">
                        <Plus className="bg-white text-black rounded-sm" size={16} />
                        <p className="cursor-pointer">Criar playlist</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-2">
                        <HeartStraight className="bg-violet-500 text-white rounded-sm" size={16} />
                        <p className="text-xs cursor-pointer">Músicas Curtidas</p>
                        <ArrowCircleDown className="text-white" size={16} />
                    </div>
                    <div className=" mt-3 border-t text-slate-200 mr-2">
                    </div>

                    <div className="text-xs mt-2">
                        <p className="cursor-pointer">Sad Songs</p>
                        <div className="flex gap-2 items-center">
                            <p className="cursor-pointer">This Is  The Earth</p>
                            <ArrowCircleDown className="text-white" size={12} />
                        </div>
                        <p className="cursor-pointer">Descobertas da Semana</p>
                        <p className="cursor-pointer">Today's Top Hits</p>
                        <p className="cursor-pointer">Pop Up</p>
                        <p className="cursor-pointer">Hora Acústica</p>
                        <p className="cursor-pointer">Minha Playlist</p>
                    </div>
                    
                </div>
            
            </div>
        </>
    )
}
export default Sidebar