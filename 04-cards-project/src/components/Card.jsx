import { Bookmark } from 'lucide-react'
const Card = (props) => {

    return (
        <div className="h-[330px] w-[280px] bg-white rounded-[30px] p-[30px] flex flex-col justify-between">
            <div>
                <div className="flex items-start justify-between mb-[30px]">
                    <img className="h-[42px] w-[42px] rounded-full border border-[#dadada] p-[3px] object-cover" src={props.brandLogo} alt="brand logo" />
                    <button className="flex items-center border border-[#dadada] px-1.5 py-1 text-[10px] rounded-[5px] gap-[3px] bg-transparent text-[#8b8b8b]">Save <Bookmark size={10} /> </button>
                </div>
                <div>
                    <h3 className="text-[16px] font-medium">{props.company} <span className="text-[9px] font-normal text-[#aeaeae]">{props.datePosted}</span></h3>
                    <h2 className="text-[21px] font-medium">{props.post}</h2>
                    <div className="flex mt-2.5 gap-1.5">
                        <h4 className="text-[10px] bg-[#e4e4e4] text-[#202020] font-medium px-2 py-1 rounded-[3px]">{props.tag1}</h4>
                        <h4 className="text-[10px] bg-[#e4e4e4] text-[#202020] font-medium px-2 py-1 rounded-[3px]">{props.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-t-[1.5px] border-[#d7d7d7ce] pt-[15px]">
                <div>
                    <h3 className="text-[17px] font-medium mb-1">{props.pay}</h3>
                    <p className="text-[10px] text-[#8b8b8b]">Mumbai, India</p>
                </div>
                <button className="bg-[#121212] text-white px-4 py-2 border-none rounded-[5px] text-[12px]">Apply Now</button>
            </div>
        </div>
    )
}

export default Card