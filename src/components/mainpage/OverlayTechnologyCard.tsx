import { motion } from "framer-motion";
import { DevTechnology } from "src/types";

interface Props {
    technology: DevTechnology,
    handleClick: Function,
}

const OverlayTechnologyCard = ({ technology, handleClick }: Props): JSX.Element => {

	return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-40 grid place-items-center" onClick={() => handleClick()} >
            <motion.div
                key={technology.name}
                className='w-11/12 max-w-6xl mx-auto p-8 flex-grow-[1] bg-stone-800'
                layoutId={`card-container-${technology.name}`}>
                    <motion.div className='flex justify-between'>
                        <motion.h3 className='font-bold text-3xl'>{technology.name}</motion.h3>
                        <motion.img className='min-w-[50px] h-auto' src={technology.logo} alt="Technology logo" />
                    </motion.div>
                    <motion.p className="mt-12">{technology.description}</motion.p>
            </motion.div>
        </div>
	);

}

export default OverlayTechnologyCard;