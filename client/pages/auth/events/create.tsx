import { Form, Formik } from 'formik'
import axios from 'axios';
import React from 'react';
import ROUTES from '../../../src/api/routes';
import Input from '../../../src/components/Inputs';
import AutoComplete from 'react-google-autocomplete'

export default function CreateEvent() {

    const [outSideValues, setOutsideValues] = React.useState<{ longitude: number; latitude: number;  cover: null | File}>({
        latitude: 0,
        longitude: 0,
        cover: null,
    })

    const [message, setMessage] = React.useState(<></>)

    return (
        <Formik
            initialValues={{
                name: "",
                title: "",
                desc: "",
            }}
            onSubmit={async ({name, title, desc}, helpers) => {
                helpers.setSubmitting(true)
                try {
                    console.table({name, title, desc, ...outSideValues})
                    // const formData = new FormData()
                    // formData.append('latitude', String(outSideValues.latitude))
                    // formData.append('longitude', String(outSideValues.longitude))
                    // formData.append("name", name)
                    // formData.append("title", title)
                    // formData.append("desc", desc)
                    // formData.append("cover", outSideValues.cover)
                    // await axios.post(ROUTES.CREATE_EVENT, formData)
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
                            name='name'
                            handleChange={formik.handleChange}
                            values={formik.values.name}
                        />
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
                        <input type='file' onChange={e => setOutsideValues(prevVals => ({...prevVals}))} />
                        <AutoComplete
                            apiKey={'AIzaSyCM1VI80zuUcl_mZyXX24UgBFL-WljWpFM'}
                            onPlaceSelected={place => console.log(place)}
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