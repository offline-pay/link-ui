import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { merchantService } from '../services/merchant.service';

function List({ match }) {
    const { path } = match;
    const [merchants, setMerchants] = useState(null);

    useEffect(() => {
        merchantService.getAll().then(x => setMerchants(x));
    }, []);

    function deleteMerchant(id) {
        setMerchants(merchants.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        merchantService.delete(id).then(() => {
            setMerchants(merchants => merchants.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h3>Merchants</h3>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Merchant</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th style={{ width: '30%' }}>Merchant ID</th>
                    <th style={{ width: '30%' }}>Merchant Name</th>
                    <th style={{ width: '30%' }}>Merchant Email</th>
                    <th style={{ width: '10%' }}></th>
                </tr>
                </thead>
                <tbody>
                {merchants && merchants.map(merchant =>
                    <tr key={merchant.id}>
                        <td>{merchant.merchantId}</td>
                        <td>{merchant.merchantName}</td>
                        <td>{merchant.merchantEmail}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>
                            <Link to={`${path}/edit/${merchant.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                            <button onClick={() => deleteMerchant(merchant.id)} className="btn btn-sm btn-danger btn-delete-merchant" disabled={merchant.isDeleting}>
                                {merchant.isDeleting ? <span className="spinner-border spinner-border-sm"></span> : <span>Delete</span>}
                            </button>
                        </td>
                    </tr>
                )}
                {!merchants &&
                <tr>
                    <td colSpan="4" className="text-center">
                        <div className="spinner-border spinner-border-lg align-center"></div>
                    </td>
                </tr>
                }
                {merchants && !merchants.length &&
                <tr>
                    <td colSpan="4" className="text-center">
                        <div className="p-2">No Merchants To Display</div>
                    </td>
                </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export { List };