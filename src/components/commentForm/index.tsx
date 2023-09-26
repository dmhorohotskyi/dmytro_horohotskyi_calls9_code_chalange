import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import './style.css';
import {useEffect, useState} from "react";

const schema = yup
    .object({
        text: yup.string().required(),
        type: yup.string().required(),
        time: yup.number().positive().integer().required(),
    })
    .required()


export default function CommentForm(props: any) {
    // let {
    //     userId,
    //     articleId
    // } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: any) => {
        const commentData = {
            ...data,
            by: props.userId,
            parent: props.articleId
        }
        if (props.articleId) {
            console.log(commentData);
        }

    };

    return (
        <form className='comment-form' onSubmit={handleSubmit(onSubmit)}>

            <section className='comment-field'>
                <label>Please select article and leave a comment</label>
                <textarea {...register("text")} placeholder='Please write comment here'/>
            </section>

            <section className='hide'>
                <label>Type</label>
                <input {...register("type")} value='Comment' />
            </section>

            <section className='hide'>
                <label>Time</label>
                <input {...register("time")} value={new Date().getTime()} />
                <p>{errors.time?.message}</p>
            </section>

            <input className='submit-btn' type="submit" />
        </form>
    )
}