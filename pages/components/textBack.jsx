import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
function TextBack({speed}) {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, 0.3], [180, -300 ])
    return (
        <motion.div className="wrap-text-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: 180 }}
            transition={{ duration: 1 }}
            style={{ top: yValue }}
        >
            <div>co<br />lom<br />bia</div>
        </motion.div>
    )
}

export default TextBack