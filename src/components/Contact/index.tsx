import React, { useRef, useState } from 'react';
import FlexListService from '../UI/FlexListService';
import { CheckCircleIcon, MailIcon } from '@heroicons/react/solid';
import { useForm } from 'react-hook-form';
import IconButton from '../UI/IconButton ';
import Button from '../UI/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import PageHeader from '../UI/PageHeader';
import { myConfig } from '../../lib/config';
import { GithubIcon } from '../../svgs';

type FormType = {
    name: string;
    email: string;
    note: any;
};

const schema = yup
    .object()
    .shape({
        name: yup.string().required().max(20),
        email: yup.string().email().required().max(50),
        note: yup
            .string()
            .matches(/^[\w\-\s]+$/)
            .required()
            .max(200)
            .min(10),
    })
    .required();

const Index = () => {
    const inputRef = useRef(null);
    const [isSubmit, setSubmit] = useState(false);
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('Email');
    const [note, setNote] = useState('Description');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormType>({
        defaultValues: { name: '', email: '', note: '' },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any, e: any) => {
        e.target.reset();
        window.setTimeout(function () {
            setSubmit(true);
        }, 2000);
        // window.setTimeout(function () { setSubmit(false) }, 5000);
    };
    const handleChange = (e: any) => {
        const patternNote = /^[ A-Za-z0-9_@./#&+-/\n/]*$/;
        const patternName = /^[A-Za-z]+$/i;

        if (e.target.name == 'name') {
            if (patternName.test(e.target.value)) setName(e.target.value);
        } else if (e.target.name == 'note') {
            if (patternNote.test(e.target.value)) setNote(e.target.value);
        } else if (e.target.name == 'note') {
            setEmail(e.target.value);
        }
    };

    return (
        <div
            id="dv-contact"
            className={`${Style.pageContainer} bg-zinc-900 h-full min-h-[100vh] `}
        >
            <PageHeader
                header="Contact"
                styleheader="text-white"
                styleSubheader="text-xl-custom text-gray-300"
                subHeader="Get in touch"
            />

            <div className={Style.contactBox}>
                <div
                    className={`${Style.textBox} mb-8 flex flex-col items-center justify-center align-middle md:mb-14 lg:m-0`}
                >
                    <span
                        className={`text-white text-xl  pb-1 mb-5 font-bold sm:text-center`}
                    >
                        I’d Love to Hear From You!
                    </span>

                    <p
                        className={`font-base text-center text-gray-300 sm:text-center md:w-[70%]`}
                    >
                        I am just one click away to help you take your project
                        or product from great to incredible. Write to me to
                        share more details about your project.
                    </p>
                </div>
                <div className={`${Style.formBox}`}>
                    <Button
                        text="send email"
                        isDark={false}
                        style="mb-3 w-52"
                        iconPosition="left"
                        isTragetBlank={true}
                        href={`mailto:${myConfig.MAILTO_URL}`}
                        icon={
                            <MailIcon className="h-5 w-5 fill-zinc-900 mr-2" />
                        }
                    />
                    <Button
                        text="Visit Github"
                        isDark={false}
                        style=" w-52"
                        iconPosition="left"
                        isTragetBlank={true}
                        href={`${myConfig.GITHUB_URL}`}
                        icon={
                            <GithubIcon
                                className="h-5 w-5 fill-zinc-900 mr-2"
                                viewbox="0 0 16 16"
                            />
                        }
                    />
                </div>

                {/* <div className={Style.formBox}>

                    {
                        isSubmit &&
                        <div className='h-80 flex flex-col items-center justify-center'>
                            <CheckCircleIcon className='h-10 w-10 fill-green-600 mb-5' />
                            <Text
                                text="Thanks for writing to me. I will get back to you shortly."
                                classes='text-sm text-center'
                                color='text-gray-200'
                                type='span'
                            />
                        </div>
                    }
                    {
                        !isSubmit &&

                        <form
                            className='h-80 w-full max-w-[500px] flex flex-col items-center justify-evenly lg:p-5'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className={`h-[40px] ${Style.inputForm} ${errors.name ? Style.errorBorder : Style.normalBorder} `}
                                {...register('name')}
                                maxLength={20}
                                placeholder='Name'
                                disabled
                            />

                            <input className={`h-[40px]  ${Style.inputForm} ${errors.email ? Style.errorBorder : Style.normalBorder} `}
                                {...register('email')}
                                maxLength={30}
                                placeholder='Email'
                                disabled
                            />

                            <textarea className={`h-[80px] ${Style.inputForm} ${errors.note ? Style.errorBorder : Style.normalBorder} `}
                                {...register('note')}
                                maxLength={200}
                                placeholder='Note'
                                disabled
                            ></textarea>

                            <input ref={inputRef} type="submit" className={`${Style.button} disabled`} disabled />
                        </form>
                    }
                </div> */}
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20 md:py-32 lg:py-24`,
    contactBox: ` min-h-full flex flex-col lg:flex-row items-center justify-center p-5`,
    formBox:
        'w-full h-full min-h-80 flex flex-col items-center justify-center lg:border-l-[1px] border-zinc-700',
    textBox: `w-full h-full`,
    button: `w-full px-2 py-4 bg-red-500 text-white font-bold text-sm leading-tight uppercase shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
            transition duration-150 ease-in-out flex flex-column items-center justify-center `,
    inputForm: `w-full bg-transparent   border-[1px] focus:outline-none text-gray-300 p-2 text-sm disabled`,
    errorBorder: `border-opacity-100 border-red-600`,
    normalBorder: `border-opacity-50 border-zinc-400`,
    linkToBox: `h-16 w-full lg:w-[300px] border-[1px] border-zinc-600`,
};

export default Index;
