import { Button, Accordion } from 'react-bootstrap'

function BS5() {
  return (
    <>
      {/* 用react-bootstrap中的元件 */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <hr />
      {/* 用單純的bs5中的樣式套用 */}
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
    </>
  )
}

export default BS5
