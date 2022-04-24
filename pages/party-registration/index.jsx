import { useFormik } from 'formik'
import validate from '../../validate'

const PartyRegistration = () => {
  //* formik hook for handling form

  const formik = useFormik({
    initialValues: {
      votername: '',
      age: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-xs ">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="partyname"
            >
              Party Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="partyname"
              type="text"
              placeholder="Party Name"
              {...formik.getFieldProps('partyname')}
            />
            {formik.touched.partyname && formik.errors.partyname ? (
              <div>{formik.errors.partyname}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="candidate name"
            >
              Candidate Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="candidate"
              type="text"
              placeholder="Candidate Name"
              {...formik.getFieldProps('candidate')}
            />
            {formik.touched.candidate && formik.errors.candidate ? (
              <div>{formik.errors.candidate}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline ml-16  rounded bg-blue-500 py-2 px-7 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartyRegistration
