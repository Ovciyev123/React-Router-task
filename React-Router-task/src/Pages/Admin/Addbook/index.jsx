import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Addbook() {

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("title - required")
      .min(3, "title - min 3 hərf olmalıdır")
      .max(50, "title - max 50 hərf ola bilər"),
    description: Yup.string()
      .required("description - required")
      .min(20, "description - min 20 hərf olmalıdır")
      .max(50, "description - max 50 hərf ola bilər"),
    price: Yup.number()
      .required("price - required")
      .positive("price - positive olmalıdır")
      .integer("price - integer olmalıdır")
      .min(3, "price - min 3 olmalıdır")
      .max(100, "price - max 100 ola bilər"),
    author: Yup.string()
      .required("author - required")
      .min(3, "author - min 3 hərf olmalıdır")
      .max(15, "author - max 15 hərf ola bilər"),
    publishedYear: Yup.string().required("publishedYear - required"),
    pagescount: Yup.string().required("publishedYear - required"),
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

 
  const initialValues = {
    title: "",
    description: "",
    price: "",
    author: "",
    publishedYear: "",
    pagescount: "",
    genre: "",
    language: "",
    image: "",
  };

  const onSubmit = (values) => {
    console.log("Form Məlumatları:", values);
  };

  return (
    <div className="addform">
      <h1>Book Add</h1>
      <Formik
        initialValues={initialValues}
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
              <Field name="publishedYear" type="text" className="form-control" />
              {touched.publishedYear && errors.publishedYear && (
                <div className="text-danger">{errors.publishedYear}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="pagescount" className="form-label">Pagescount</label>
              <Field name="pagescount" type="text" className="form-control" />
              {touched.pagescount && errors.pagescount && (
                <div className="text-danger">{errors.pagescount}</div>
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

            <button type="submit" className="btn btn-primary">Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Addbook;
