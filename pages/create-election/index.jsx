import { useFormik } from 'formik'
const axios = require('axios')
import validate from '../../validate'

const PartyRegistration = () => {
  //* formik hook for handling form

  const formik = useFormik({
    initialValues: {
      electionName: '',
    },
    // validate,
    onSubmit: async (values) => {
      axios
        .post('https://fingervoting.herokuapp.com/createElection', {
          electionName: values.electionName,
        })
        .then(function (response) {
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
              htmlFor="electionName"
            >
              Election Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="electionName"
              type="text"
              placeholder="electionName"
              {...formik.getFieldProps('electionName')}
            />
            {formik.touched.electionName && formik.errors.electionName ? (
              <div>{formik.errors.electionName}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline ml-16  rounded bg-blue-500 py-2 px-7 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartyRegistration
