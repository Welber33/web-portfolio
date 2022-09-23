import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

export default function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:jwwork21gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
    ${formData.message} (${formData.email})`;
  }

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="mt-20 flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need. {" "}
          <span className="underline decoration-[#8e03ce]/50">Let's Talk</span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="w-8 h-8 animate-pulse text-[#8e03c3]" />
            <p className="text-2xl">+5581994686221</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="w-8 h-8 animate-pulse text-[#8e03c3]" />
            <p className="text-2xl">jwwork21@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="w-8 h-8 animate-pulse text-[#8e03c3]" />
            <p className="text-2xl">Rua Manoel de Araújo, 147 - Paulista/PE, Brazil</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#8e03ce] py-5 text-center rounded-md text-white font-bold text-xl hover:bg-[#8d00cf]/80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}