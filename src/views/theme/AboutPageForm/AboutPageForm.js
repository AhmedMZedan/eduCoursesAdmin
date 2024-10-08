import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { base_url } from '../../../constant'

function AboutPageForm() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState('')
  const [fullPage, setFullPage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const page = {
      ...fullPage,
      about: content,
    }

    setIsSubmited(true)
    const token = localStorage.getItem('token')
    axios
      .put(`${base_url}/api/pages/66bb64360c9ba27f7be93739?id=66bb64360c9ba27f7be93739`, page, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {})
      .then((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsSubmited(false)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(`${base_url}/api/pages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFullPage(response.data[0])
        setContent(response.data[0].about)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>About Page</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput2">Content of About Page</CFormLabel>
                <CFormTextarea
                  rows={8}
                  id="exampleFormControlInput2"
                  placeholder="content of about page"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="col-auto text-center">
                  <CButton
                    color="primary"
                    type="submit"
                    className="mb-3 mt-3 w-25"
                    onClick={handleSubmit}
                    disabled={isSubmited}
                  >
                    {isSubmited ? 'Loading...' : 'Add Content'}
                  </CButton>
                </div>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AboutPageForm
