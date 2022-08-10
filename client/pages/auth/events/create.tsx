import { Form, Formik } from 'formik'
import axios from 'axios';
import React, { ChangeEvent } from 'react';
import ROUTES from '../../../src/api/routes';
import Input from '../../../src/components/Inputs';
import AutoComplete from 'react-google-autocomplete'
import { useAuth } from '../../../src/context/AuthContext';

export default function CreateEvent() {

    const [outSideValues, setOutsideValues] = React.useState<{ longitude: number; latitude: number;  cover: null | File, loc: any}>({
        latitude: 0,
        longitude: 0,
        cover: null,
        loc: {}
    })

    const [message, setMessage] = React.useState(<></>)
    const {user} = useAuth()

    return (
        <Formik
            initialValues={{
                title: "",
                desc: "",
            }}
            onSubmit={async ({title, desc}, helpers) => {
                helpers.setSubmitting(true)
                try {
                    let lat = outSideValues.loc.lat()
                    let long = outSideValues.loc.lng()
                    console.table({ title, desc, lat, long, ...outSideValues, "ANV": ""})
                    const formData = new FormData()
                    formData.append('latitude', String(lat))
                    formData.append('longitude', String(long))
                    formData.append("title", title)
                    formData.append("desc", desc)
                    formData.append("uid", user.uid)
                    formData.append("cover", outSideValues.cover)
                    // const headers = new Headers({
                    //     'Content-Type': 'multipart/form-data'
                    // })
                    // await fetch(ROUTES.CREATE_EVENT, {
                    //     method: "POST",
                    //     body: formData,
                    //     headers: headers
                    // })
                    axios.post(ROUTES.CREATE_EVENT, formData)
                } catch (err) {
                    setMessage(<div>
                        {err}
                    </div>)
                }
            }}
        >
            {formik => {
                return (
                    <Form onSubmit={formik.handleSubmit}>
                        <Input
                            name='title'
                            handleChange={formik.handleChange}
                            values={formik.values.title}
                        />
                        <Input
                            name='desc'
                            handleChange={formik.handleChange}
                            values={formik.values}
                        />
                        <input type="file" onChange={(e: any) => setOutsideValues(prevVals => ({...prevVals, cover: e.target.files[0]}))} />
                        <AutoComplete
                            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
                            onPlaceSelected={place => setOutsideValues(val => ({...val, loc: place.geometry.location}))}
                        />
                        <button type='submit'>
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}