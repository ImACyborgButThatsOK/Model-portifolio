import './contact.scss'
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook } from "react-icons/fi"
const Contact = () => {
    return (
        <div className='contact'>
            <h1 className="contact-title">Business contact</h1>
            <div className="contact-info">
                <div className="socialMidia">

                    <a href="https://www.pexels.com/pt-br/" className='link'><AiOutlineMail /></a>
                    <a href="https://www.pexels.com/pt-br/" className='link'><AiOutlineInstagram /></a>
                    <a href="https://www.pexels.com/pt-br/" className='link'><FaXTwitter /></a>
                    <a href="https://www.pexels.com/pt-br/" className='link'><FiFacebook /></a>
                </div>

                <div className="politic">
                    <div className="Copyright">Copyright: <a target='_blank' rel="noreferrer" className='link' href="https://www.pexels.com/pt-br/licenca/"> politics and licence</a></div>
                </div>

                <div className="credits">
                    <a target='_blank' rel="noreferrer" className='link' href="https://www.pexels.com/pt-br/">My thanks to "Pexels" for enabling the creation of my project.</a>
                </div>
            </div>
        </div>
    )
}

export default Contact