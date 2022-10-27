import React from 'react';
import Header from '../../components/header/Header';

function AdminEnrollProcessScreen() {
  return (
    <div>
      <Header page="Enrollment Process" />
      <div style={{ width: '70%' }} className="mx-auto border p-5">
        <div>&gt; STRAND / TRACK</div>
        <div className="ms-3 mt-4">
          <div>ABM &#40; Section 1, 2, 3, 4, 5 &#41;</div>
          <div>GAS</div>
          <div>HUMSS</div>
          <div>STEM</div>
          <div>TVL-ECONOMICS</div>
          <div>TVL-ICT</div>
        </div>
      </div>
    </div>
  );
}

export default AdminEnrollProcessScreen;
