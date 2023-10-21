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
                {links.map((item, index) => (
                    <AnimatePresence key={index}>
                        <motion.div   
                            className="shortens_item"
                            data-active={copiedLinks === item.short_url}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                        >
                            <div className="shortens_links">
                                <span className="shortens_link">{item.link.long_url}</span>
                                <span className="shortens_link">{item.short_url}</span>
                            </div>
                            
                            <button 
                                onClick={() => copyClipboard(item.short_url)} 
                                className={copiedLinks === item.short_url ? 'shortens_button_active' : 'shortens_button'}
                            >
                                {copiedLinks === item.short_url ? 'Copied' : 'Copy'}
                            </button>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    )
}

export default Shortens;