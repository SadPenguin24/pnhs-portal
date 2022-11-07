import React from 'react';
import { Container, FormControl } from 'react-bootstrap';
import Header from '../../components/header/Header';
import { MasterlistTable } from '../../components/tables/Tables';
import { useGetAllProfileQuery } from '../../redux/api/userApi';

function AdminStudentMasterlist() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProfileQuery({});

  console.log(users);
  return (
    <div>
      <style>{'body { background-color: #dcf7b0; }'}</style>
      <Header page="Student Masterlist" redirect="/admin/home" />
      <Container>
        <div className="d-flex justify-content-end mb-3">
          <div className="w-50">
            <FormControl
              style={{ backgroundColor: '#ffe4a0', border: '#eaaa79 solid' }}
              placeholder="Enter Student Name"
            ></FormControl>
          </div>
        </div>
        <MasterlistTable headerColor="#2a6fd6" student={true} />
      </Container>
    </div>
  );
}

export default AdminStudentMasterlist;
