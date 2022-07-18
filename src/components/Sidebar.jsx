import { ArrowCircleDown, Books, DotsThree, HeartStraight, House, MagnifyingGlass, Plus, PlusCircle } from "phosphor-react";

function Sidebar(){
    return(
        <>
            <div className="bg-black w-1/5 h-72">
                <div className="mt-1 ml-2">
                    <DotsThree className="text-white" size={16} />
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <House size={16} />
                        <p>Início</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <MagnifyingGlass size={16} />
                        <p>Buscar</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-1">
                        <Books size={16} />
                        <p>Sua Biblioteca</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-4">
                        <Plus className="bg-white text-black rounded-sm" size={16} />
                        <p>Criar playlist</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-2">
                        <HeartStraight className="bg-violet-500 text-white rounded-sm" size={16} />
                        <p className="text-xs">Músicas Curtidas</p>
                        <ArrowCircleDown className="text-white" size={16} />
                    </div>
                    <div className=" mt-3 border-t text-slate-200 mr-2">
                    </div>

                    <div className="text-xs mt-2">
                        <p>Sad Songs</p>
                        <div className="flex gap-2 items-center">
                            <p>This Is  The Earth</p>
                            <ArrowCircleDown className="text-white" size={12} />
                        </div>
                        <p>Descobertas da Semana</p>
                        <p>Today's Top Hits</p>
                        <p>Pop Up</p>
                        <p>Hora Acústica</p>
                        <p>Minha Playlist</p>
                    </div>
                    
                </div>
            
            </div>
        </>
    )
}
export default Sidebar