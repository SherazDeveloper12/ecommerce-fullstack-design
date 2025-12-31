import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import Stars from '../Stars/Stars';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../store/slices/product.js';
import { AnimatePresence, motion } from 'motion/react';
export default function DropDownRadio(props) {
    const dispatch = useDispatch();
    const RadioOnChangeHandler = (name) => {

        dispatch(setFilters({ type: props.heading, value: name }));
    }
    const checkboxchangehandler = (name, checked) => {
        const payload = { type: props.heading, value: name, checked: checked };
        console.log("payload", payload);
        dispatch(setFilters(payload));
    }
    const RatingCheckBoxHandler = (rate, checked) => {
        const payload = { type: props.heading, value: rate, checked: checked };
        dispatch(setFilters(payload));
    }

    const [isOpen, setIsOpen] = React.useState(true);
    const isFirstRender = React.useRef(true);
    
    React.useEffect(() => {
        isFirstRender.current = false;
    }, []);
    
    const filters = useSelector((state) => state.products.Filters);
    const Rating = [5, 4, 3, 2, 1];
    return (
        <div >
            <motion.div className='flex justify-between cursor-pointer items-center border-t border-gray-300 py-2 bg-[#F7FAFC] overflow-hidden z-40 '
                onClick={() => {
                    setIsOpen(!isOpen);
                   
                }}>
                <h1 className=' font-bold text-xl'>{props.heading}</h1>
                <span className={isOpen ? 'rotate-90 transition-transform duration-300 ease-in-out' : ''}>
                    <ChevronRight color='gray' />
                </span>
            </motion.div >
            <AnimatePresence>

                {
                    isOpen && props.Links &&
                    <motion.div
                        initial={isFirstRender.current ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={' overflow-hidden flex flex-col py-2 gap-2 text-gray-500 font-semibold '}>
                        {props.Links.map((link, index) => (
                            <a key={index} href={link.route} className=" hover:bg-gray-100">
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                  isOpen && props.RadioName &&
                    <motion.div
                    initial={isFirstRender.current ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height:'auto', opacity:1}}
                    exit={{ height:0, opacity:0}}
                    transition={{ duration:0.3}}
                     className={'overflow-hidden flex flex-col py-2 gap-2 text-gray-500 font-semibold ' }>
                        {props.RadioName.map((name, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type='radio' id={name} name={props.heading} value={name} defaultChecked={name === 'Any'}  onChange={() => { RadioOnChangeHandler(name) }} className='cursor-pointer' />
                                <label htmlFor={name} className='cursor-pointer'>{name}</label>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                  isOpen && props.PriceRange &&
                    <motion.div
                    initial={isFirstRender.current ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height:'auto', opacity:1}}
                    exit={{ height:0, opacity:0}}
                    transition={{ duration:0.3}}
                     className={'overflow-hidden flex flex-col py-2 gap-2 text-gray-500 font-semibold '}>
                        <div className='flex items-center gap-2'>
                            <label htmlFor='min' className='cursor-pointer'>Min:</label>
                            <input type='number' id='min' name='min' defaultValue={props.PriceRange[0]} className='border border-gray-300 rounded-md p-1 w-20' onChange={props.onChange} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label htmlFor='max' className='cursor-pointer'>Max:</label>
                            <input type='number' id='max' name='max' defaultValue={props.PriceRange[1]} className='border border-gray-300 rounded-md p-1 w-20' onChange={props.onChange} />
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                   isOpen && props.CheckboxName &&
                    <motion.div 
                    initial={isFirstRender.current ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height:'auto', opacity:1}}
                    exit={{ height:0, opacity:0}}
                    transition={{ duration:0.3}}
                    className={'overflow-hidden flex flex-col py-2 gap-2 text-gray-500 font-semibold ' }>
                        {props.CheckboxName.map((name, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type='Checkbox' id={name} name={props.heading}  value={name} onChange={(e) => checkboxchangehandler(name, e.target.checked)} className='cursor-pointer' />
                                <label htmlFor={name} className='cursor-pointer'>{name}</label>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                  isOpen && props.Rating &&
                    <motion.div 
                    initial={isFirstRender.current ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height:'auto', opacity:1}}
                    exit={{ height:0, opacity:0}}
                    transition={{ duration:0.3}}
                    className={'overflow-hidden flex flex-col py-2 gap-2 text-gray-500 font-semibold '}>

                        {Rating.map((rate, index) => (

                            <div className='flex items-center gap-2'>
                                <input type='Checkbox' id={`${rate}-Stars`} value={`${rate}-Stars`} className='cursor-pointer' onChange={(e) => RatingCheckBoxHandler(rate, e.target.checked)} />
                                <label htmlFor={`${rate}-Stars`} className='cursor-pointer '>
                                    <Stars rating={rate} />
                                </label>
                            </div >

                        ))}


                    </motion.div>
                }
            </AnimatePresence>

        </div >
    )
}
