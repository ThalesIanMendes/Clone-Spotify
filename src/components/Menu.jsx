import { ArrowsOutSimple, ArrowUDownLeft, DeviceMobileCamera, HeartStraight, List, MicrophoneStage, PlayCircle, Shuffle, SkipBack, SkipForward, SpeakerSimpleHigh } from "phosphor-react";

function Menu(){
    return(
        <>
            <section className="bg-neutral-800 h-16 border-t border-zinc-500 flex">
                <div className="w-2/6 flex items-center gap-2">
                    <div className="ml-1.5 w-9 cursor-pointer">
                        <img src="./src/img/img-album.jpg" alt="" />
                    </div>
                    <div className="block text-white">
                        <h3 className="text-sm cursor-pointer">Ghost</h3>
                        <h4 className="text-xs cursor-pointer">Justin Bieber</h4>
                    </div>
                    <div className="text-white cursor-pointer">
                        <HeartStraight size={16} />
                    </div>
                </div>
                <div className="w-2/4 flex items-center">
                    <div className="block ml-12">
                        <div className="flex gap-4 ml-12 text-white">
                            <Shuffle className="cursor-pointer" size={16} />
                            <SkipBack className="cursor-pointer" size={16} />
                            <PlayCircle className="cursor-pointer" size={16} />
                            <SkipForward className="cursor-pointer" size={16} />
                            <ArrowUDownLeft className="cursor-pointer" size={16} />
                        </div>
                        <div className="flex">
                            <p>00:00</p>
                            <p className="text-white cursor-pointer"> ─────────────── </p>
                            <p>03:20</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 flex items-center">
                    <div className="flex ml-14 items-center text-white">
                        <MicrophoneStage className="cursor-pointer" size={16} />
                        <List className="cursor-pointer" size={16} />
                        <DeviceMobileCamera className="cursor-pointer" size={16} />
                        <SpeakerSimpleHigh className="cursor-pointer" size={16} />
                        <p className="text-white items-center cursor-pointer"> ─────── </p>
                        <ArrowsOutSimple className="cursor-pointer" size={16} />
                    </div>
                </div>    
            </section>
        </>
    )
}
export default Menu