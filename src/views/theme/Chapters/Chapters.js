import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { base_url } from '../../../constant'

function Chapters() {
  const { courseID } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const navigate = useNavigate()

  async function handleDelete(id) {
    if (isDeleting) return
    setIsDeleting(true)
    const token = localStorage.getItem('token')

    axios
      .delete(`${base_url}/api/chapter/${id}?chapterId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data
      })
      .catch((error) => {
        console.log(error.response.data)
      })
      .finally(() => {
        setIsDeleting(false)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(`${base_url}/api/chapter/course/${courseID}?courseId=${courseID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const transformedData = response.data.map((item) => ({
          id: item.id,
          name: item.name,
        }))
        setData(transformedData)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [isDeleting])
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 275,
      renderCell: (params) => {
        return (
          <div className="d-flex">
            <p
              className="mb-0 me-3 text-danger fw-bold"
              style={{ cursor: 'pointer' }}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </p>

            <p
              className="mb-0 me-3 fw-bold"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/lessons/${courseID}/${params.row.id}`)}
            >
              View Lessons
            </p>
          </div>
        )
      },
    },
  ]

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <button
          className="bg-success border-0 btn px-4 py-2 text-white fw-bold"
          onClick={() => navigate(`/addChapter/${courseID}`)}
        >
          Add Chapter
        </button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Chapters
