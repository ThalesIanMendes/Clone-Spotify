import { ArrowsOutSimple, ArrowUDownLeft, DeviceMobileCamera, HeartStraight, List, MicrophoneStage, PlayCircle, Shuffle, SkipBack, SkipForward, SpeakerSimpleHigh } from "phosphor-react";

function Menu(){
    return(
        <>
            <section className="bg-neutral-800 h-16 border-t border-zinc-500 flex">
                <div className="w-2/6 flex items-center gap-2">
                    <div className="ml-1.5 w-9 ">
                        <img src="./src/img/img-album.jpg" alt="" />
                    </div>
                    <div className="block text-white">
                        <h3 className="text-sm">Ghost</h3>
                        <h4 className="text-xs">Justin Bieber</h4>
                    </div>
                    <div className="text-white">
                        <HeartStraight size={16} />
                    </div>
                </div>
                <div className="w-2/4 flex items-center">
                    <div className="block ml-12">
                        <div className="flex gap-4 ml-12 text-white">
                            <Shuffle size={16} />
                            <SkipBack size={16} />
                            <PlayCircle size={16} />
                            <SkipForward size={16} />
                            <ArrowUDownLeft size={16} />
                        </div>
                        <div className="flex">
                            <p>00:00</p>
                            <p className="text-white"> ─────────────── </p>
                            <p>03:20</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 flex items-center">
                    <div className="flex ml-14 items-center text-white">
                        <MicrophoneStage size={16} />
                        <List size={16} />
                        <DeviceMobileCamera size={16} />
                        <SpeakerSimpleHigh size={16} />
                        <p className="text-white items-center"> ─────── </p>
                        <ArrowsOutSimple size={16} />
                    </div>
                </div>    
            </section>
        </>
    )
}
export default Menu