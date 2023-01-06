import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Kawaki'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://i.hizliresim.com/4o7uetw.png')]
        bg-no-repeat bg-cover bg-clip-border"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center font-zenDots">
            A.I Arts <br />
            <span className="text-black font-zenDots">NFTs</span> Collection
          </h1>

          <p className="font-semibold text-sm mt-3 font-zenDots text-center text-[#28c5bdf5] typewriter ">
           <h1> Mint your NFTs and create your own collection.</h1>
           <h1>You will love Cyberpunk, Steampunk, Nordic etc. themed NFTs.They are all unique elements.</h1>
            
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#990e0e] hover:bg-[#f83131] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <a
            href="https://daltonic.github.io/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt="Kawaki Logo"
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#e32970] text-xs">Kawaki</span>
            </div>
          </a>

          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/brskocyigit"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://www.linkedin.com/in/brskocyigit"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/brs_kocyigit"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
