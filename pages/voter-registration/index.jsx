import { useFormik } from 'formik'
import validate from '../../validate'
const axios = require('axios')
//* voter registration

const VoterRegistration = () => {
  //* formik hook for handling form

  const formik = useFormik({
    initialValues: {
      voterId: '',
      votername: '',
      age: '',
      password: '',
    },
    // validate,
    onSubmit: async (values) => {
      axios
        .post('https://fingervoting.herokuapp.com/createVoter', {
          voterId: values.voterId,
          name: values.votername,
          age: values.age,
          password: values.password,
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
              htmlFor="votername"
            >
              Voter Id
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="votername"
              type="text"
              placeholder="Voter ID"
              {...formik.getFieldProps('voterId')}
            />
            {formik.touched.voterId && formik.errors.voterId ? (
              <div>{formik.errors.voterId}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="votername"
            >
              Voter Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="votername"
              type="text"
              placeholder="Voter Name"
              {...formik.getFieldProps('votername')}
            />
            {formik.touched.votername && formik.errors.votername ? (
              <div>{formik.errors.votername}</div>
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
              htmlFor="votername"
            >
              Voter Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="Voter Address"
              type="password"
              placeholder="Voter Password"
              {...formik.getFieldProps('password')}
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
