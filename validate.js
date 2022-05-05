const validate = (values) => {
  const errors = {}

  //* validating party name
  if (!values.partyname) {
    errors.partyname = 'First name is required'
  } else if (values.partyname.length < 8) {
    errors.partyname = 'Invalid Party name !'
  } else {
    errors.partyname = 'Valid Party name'
  }

  //* validating candidate name
  if (!values.candidate) {
    errors.candidate = 'Last name is required !'
  } else if (values.candidate.length < 2) {
    errors.candidate = 'Less than 2 word !'
  } else {
    errors.candidate = 'Valid Candidate name'
  }

  //* validating voter name
  if (!values.votername) {
    errors.votername = 'Voter name is required'
  } else if (values.votername.length < 2) {
    errors.votername = 'Less than 2 word !'
  } else {
    errors.votername = 'Valid Candidate name'
  }

  //* validating age name
  if (!values.age) {
    errors.age = 'Age is required !'
  } else if (values.age < 18) {
    errors.age = 'You are not authorized to register'
  } else {
    errors.age = 'You can register'
  }

  return errors
}

export default validate
