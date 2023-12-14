import { motion } from "framer-motion";

const transition = (OgComponent: any) => {
    
    return () => (
        <>
            <OgComponent />
            <motion.div
                className='fixed z-50 top-0 left-0 bg w-full h-screen origin-bottom bg-gradient-to-br from-blue-600 to-blue-500'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            />

            <motion.div
                className='fixed z-50 top-0 left-0 w-full h-screen origin-top bg-gradient-to-br from-blue-600 to-blue-500'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            />
        </>
    )
}
 
export default transition;