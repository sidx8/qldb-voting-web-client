import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
const axios = require('axios')
import validate from '../../validate'

//* voter registration

const VoterRegistration = () => {
  //* formik hook for handling form
let eIds=[];
const [elecid, seteids] = useState([]);
  useEffect(() => {
    axios
      .get('https://fingervoting.herokuapp.com/elections')
      .then(function (response) {  
        eIds = response.data;
        seteids(eIds);
        console.log("electionIs", eIds)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  const formik = useFormik({
    initialValues: {
      candidateId: '',
      electionId: '',
      name: '',
      age: '',
      partyName: '',
    },
    // validate,
    onSubmit: async (values) => {
      axios
        .post('https://fingervoting.herokuapp.com/createCandidate', {
          candidateId: values.candidateId,
          electionId: values.electionId,
          name: values.name,
          age: values.age,
          partyName: values.partyName,
        })
        .then(function (response) {
          formik.resetForm();
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log(values)
    },
  })

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-xs ">
        <form
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="candidateId"
            >
              Candidate Id
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="candidateId"
              type="text"
              placeholder="Candidate ID"
              {...formik.getFieldProps('candidateId')}
            />
            {formik.touched.candidateId && formik.errors.candidateId ? (
              <div>{formik.errors.candidateId}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="electionId"
            >
              electionId
            </label>
            {/* <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="electionId"
              type=""
              placeholder="Election ID"
              {...formik.getFieldProps('electionId')}
            /> */}
            <select id='electionId' value={formik.values.electionId} onChange={formik.handleChange}>
             {elecid.map((e) =>( <option key={e.electionId} value={e.electionId}>{e.electionName}</option>)) }
            </select>
            {formik.touched.electionId && formik.errors.electionId ? (
              <div>{formik.errors.electionId}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="age"
              type="number"
              placeholder="Age"
              {...formik.getFieldProps('age')}
            />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="partyName"
            >
              Party Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="partyName"
              type="partyName"
              placeholder="partyName"
              {...formik.getFieldProps('partyName')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline ml-16  rounded bg-blue-500 py-2 px-7 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VoterRegistration
