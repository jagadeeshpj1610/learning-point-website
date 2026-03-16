import './FloatBtns.css'
import { FaWhatsapp } from 'react-icons/fa'


export default function FloatBtns() {
  return (
    <div className="float-btns">
      <a href="https://wa.me/918247725301" target="_blank" rel="noreferrer" className="float-wa">
        <FaWhatsapp size={26} />
      </a>
      <a href="tel:8247725301" className="float-call" title="Call Us">📞</a>
    </div>
  )
}
