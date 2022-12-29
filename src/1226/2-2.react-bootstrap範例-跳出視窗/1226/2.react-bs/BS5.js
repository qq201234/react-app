import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
// 也可以用下面的引入方式，目前新支援，減少最後編譯的檔案大小
// import Accordion from 'react-bootstrap/Accordion';

function BS5() {
  const [show, setShow] = useState(false)

  return (
    <>
      {/* 用react-bootstrap中的元件 */}
      <Button
        variant="primary"
        onClick={() => {
          setShow(true)
        }}
      >
        開啟
      </Button>

      <Modal
        show={show}
        onHide={() => {
          setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false)
            }}
          >
            關閉
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BS5
