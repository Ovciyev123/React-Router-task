import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Editbook() {

const {id}=useParams()

const navigate=useNavigate()

let [editdata,setteditdata]=useState({
  title: "",
  description: "",
  price: "",
  author: "",
  publishedYear: "",
  pagesCount: "",
  genre: "",
  language: "",
  image: "",
})

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("title - required")
      .min(3, "title - min 3 hərf olmalıdır")
      .max(50, "title - max 50 hərf ola bilər"),
    description: Yup.string()
      .required("description - required")
      .min(20, "description - min 20 hərf olmalıdır")
      .max(150, "description - max 150 hərf ola bilər"),
    price: Yup.number()
      .required("price - required")
      .min(3, "price - min 3 olmalıdır")
      .max(50, "price - max 50 ola bilər"),
    author: Yup.string()
      .required("author - required")
      .min(3, "author - min 3 hərf olmalıdır")
      .max(30, "author - max 30 hərf ola bilər"),
    publishedYear: Yup.number().required("publishedYear - required"),
    pagesCount: Yup.number().required("publishedYear - required"),
    genre: Yup.string()
      .required("genre - required")
      .min(3, "genre - min 3 hərf olmalıdır")
      .max(20, "genre - max 20 hərf ola bilər"),
    language: Yup.string()
      .required("language - required")
      .min(3, "language - min 3 hərf olmalıdır")
      .max(20, "language - max 20 hərf ola bilər"),
    image: Yup.string()
      .required("image - required")
      .url("image - düzgün URL olmalıdır"),
  });

  function getEditBook(id){ axios.get(`http://localhost:3000/books/${id}`)
  .then(res=>setteditdata(res.data))
  }

  useEffect(() => {
    if (id) {
      getEditBook(id);
    }
  }, [id]);
 

   
 

 
 

  const onSubmit = (values) => {
    axios.put(`http://localhost:3000/books/${id}`, values)
    .then(()=>{
      navigate("/admin/books")
    })

   

  };

  return (
    <div className="addform">
      <h1>Book Edit</h1>
      <Formik
        initialValues={editdata}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Name</label>
              <Field name="title" type="text" className="form-control" />
              {touched.title && errors.title && (
                <div className="text-danger">{errors.title}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <Field name="description" type="text" className="form-control" />
              {touched.description && errors.description && (
                <div className="text-danger">{errors.description}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <Field name="price" type="number" className="form-control" />
              {touched.price && errors.price && (
                <div className="text-danger">{errors.price}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <Field name="author" type="text" className="form-control" />
              {touched.author && errors.author && (
                <div className="text-danger">{errors.author}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="publishedYear" className="form-label">PublishedYear</label>
              <Field name="publishedYear" type="number" className="form-control" />
              {touched.publishedYear && errors.publishedYear && (
                <div className="text-danger">{errors.publishedYear}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="pagesCount" className="form-label">Pagescount</label>
              <Field name="pagesCount" type="number" className="form-control" />
              {touched.pagesCount && errors.pagesCount && (
                <div className="text-danger">{errors.pagesCount}</div>
              )}
            </div>


            <div className="mb-3">
              <label htmlFor="genre" className="form-label">Genre</label>
              <Field name="genre" type="text" className="form-control" />
              {touched.genre && errors.genre && (
                <div className="text-danger">{errors.genre}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="language" className="form-label">Language</label>
              <Field name="language" type="text" className="form-control" />
              {touched.language && errors.language && (
                <div className="text-danger">{errors.language}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <Field name="image" type="text" className="form-control" />
              {touched.image && errors.image && (
                <div className="text-danger">{errors.image}</div>
              )}
            </div>
               <button type="submit"  className="btn btn-warning">Edit</button>
            
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Editbook;
