import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { selectLinks } from "../../store/slice/linkSlice";
import "./shortens.css";

const Shortens = () => {
    const [copiedLinks, setCopiedLinks] = useState(null);
    const links = useSelector(selectLinks);

    const copyClipboard = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLinks(link);
        })
    }

    if (!links?.length) return null;

    return(
        <section className="shortens">
            <div className="container">
                {links.map(item => (
                    <AnimatePresence key={item.code}>
                        <motion.div   
                            className="shortens_item"
                            data-active={copiedLinks === item.full_short_link2}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                        >
                            <div className="shortens_links">
                                <span className="shortens_link">{item.original_link}</span>
                                <span className="shortens_link">{item.full_short_link2}</span>
                            </div>
                            
                            <button 
                                onClick={() => copyClipboard(item.full_short_link2)} 
                                className={copiedLinks === item.full_short_link2 ? 'shortens_button_active' : 'shortens_button'}
                            >
                                {copiedLinks === item.full_short_link2 ? 'Copied' : 'Copy'}
                            </button>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    )
}

export default Shortens;