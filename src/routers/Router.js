import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateExercise from '../components/CreateExercise';
import EditExercise from '../components/EditExercise';
import NotFound from '../components/NotFound';


const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
