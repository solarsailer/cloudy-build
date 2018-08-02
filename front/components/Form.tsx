import Router from 'next/router'

// -------------------------------------------------------------
// Helpers.
// -------------------------------------------------------------

function convertFormElements(elements) {
  const result = {}

  for (const el of elements) {
    if (el.name) result[el.name] = el.value
  }

  return result
}

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

function handleSubmit(e) {
  e.preventDefault()

  const target = e.target
  const pathname = new URL(target.action).pathname

  let query = {}
  if (target.elements) {
    query = convertFormElements(target.elements)
  }

  Router.push({pathname, query})
}

export default ({children, action}) => {
  return (
    <form onSubmit={handleSubmit} action={action}>
      {children}
    </form>
  )
}
