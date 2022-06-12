import React from 'react'
import { useForm } from "react-hook-form";
import Image from 'next/image'
import { motion } from 'framer-motion'

function FormAlert() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function submitting(data) {
        console.log('hi!');
    }


    const animation = {
        initial: {opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }
    const animationForm = {
        initial: {opacity: 0, top: 30},
        animate: { opacity: 1, top: 0 },
        exit: { opacity: 0 }
    }

    return (

        <motion.div 
        className='wrapper-form'
        initial="initial"
        variants={animation}
        whileInView="animate"
        transition={{duration:1}}

        >
            <motion.form 
            id="form-alert" 
            onSubmit={handleSubmit(submitting)}
            variants={animationForm}
            initial="initial"
            whileInView="animate"

            transition={{delay:0.5, duration:1}}

            
            >
                <div className="nota">Entra in contatto con noi</div>
                <p>
                    Se sei interessato o vuoi avere informazioni, organizzare attività o incontri per sostenere la causa...o anche solo per darci il tuo punto di vista.
                </p>
                <div className="box-confirm">
                    <label htmlFor='mail' >
                        <input  {...register("alertConfirm", { required: true })} placeholder="mail" name="alertConfirm" type="mail" id="mail" />
                    </label>
                    {errors.alertConfirm && <span> (Campo Obbligatorio)</span>}
                </div>
                <div>

                    <textarea {...register("noteAlert", { required: true })} placeholder="..." name="noteAlert" rows="4" cols="30" id="note-alert" />
                    {errors.noteAlert && <span> (Campo Obbligatorio)</span>}
                </div>
                <button type='submit' className='alert-big' > INVIA </button>
            </motion.form>
            <div className="backform">
                <Image src="/images/backform.jpeg" layout='fill' alt="backform" />
            </div>
        </motion.div>
    )
}

export { FormAlert }