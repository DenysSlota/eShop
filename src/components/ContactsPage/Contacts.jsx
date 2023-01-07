import Github from '../../images/github.svg';
import Linkedin from '../../images/linkedin.svg';
import Telegram from '../../images/telegram.svg';
import Mail from '../../images/gmail.svg';

const Contacts = () => {
  return (
    <>        
        <ul className='list-disc pl-10 text-xl text-center my-3'>
            <li className='flex my-5'>
                <img className='w-8 h-8 mr-5' src={Github} alt="Github" />
                <a href="https://github.com/DenysSlota" className='hover:text-[#61dafb] hover:scale-110'>Github</a> 
            </li>
            <li className='flex my-5'>
                <img className='w-8 h-8 mr-5' src={Linkedin} alt="Linkedin" />
                <a href="https://www.linkedin.com/in/denysslota" className='hover:text-[#61dafb] hover:scale-110'>Linkedin</a>
            </li>
            <li className='flex my-5'>
                <img className='w-8 h-8 mr-5' src={Telegram} alt="Telegram" />
                <a href="https://telegram.me/Sldenys" className='hover:text-[#61dafb] hover:scale-110'>Telegram</a>
            </li>
            <li className='flex my-5'>
                <img className='w-8 h-8 mr-5' src={Mail} alt="Mail" />
                <a href="mailto:7121662@gmail.com" className='hover:text-[#61dafb] hover:scale-110'>E-mail</a>
            </li>            
        </ul>
    </>
  )
}

export default Contacts