import { Form, Formik } from 'formik'
import axios from 'axios';
import React, { ChangeEvent } from 'react';
import ROUTES from '../../../src/api/routes';
import Input from '../../../src/components/Inputs';
import AutoComplete from 'react-google-autocomplete'
import { useAuth } from '../../../src/context/AuthContext';

export default function CreateEvent() {
    const {user} = useAuth()

    return (
        <></>
    )
}

// <AutoComplete
//   apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
//   onPlaceSelected={(place) =>
//     setOutsideValues((val) => ({ ...val, loc: place.geometry.location }))
//   }
// />;