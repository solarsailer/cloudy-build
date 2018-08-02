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

export default ({onReady, children}) => {
  function handleSubmit(e) {
    e.preventDefault()

    const target = e.target
    if (target.elements) {
      const result = convertFormElements(target.elements)
      onReady(result)
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}
